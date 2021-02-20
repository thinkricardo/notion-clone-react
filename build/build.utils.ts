import chokidar from 'chokidar';
import { build, BuildIncremental } from 'esbuild';
import fs from 'fs';
import liveServer from 'live-server';

import { BuildConfiguration } from './build.types';
import { Configuration } from './build.config';
import { logger } from './build.logger';

export const getConfiguration = (): BuildConfiguration => {
  const configuration: BuildConfiguration = {
    ...(Configuration as BuildConfiguration),
  };

  configuration.serverRoot = `./${configuration.serverRoot}`;
  configuration.outFile = `${configuration.serverRoot}/${configuration.outFile}`;

  configuration.sourceRoot = `./${configuration.sourceRoot}`;
  configuration.entryPoint = `${configuration.sourceRoot}/${configuration.entryPoint}`;

  configuration.watchedFiles = `${configuration.sourceRoot}/**/*.{${configuration.watchedFiles}}`;

  configuration.transformedPage = `${configuration.serverRoot}/${configuration.defaultPage}`;
  configuration.defaultPage = `${configuration.sourceRoot}/${configuration.defaultPage}`;

  return configuration;
};

export const startBuild = async (
  configuration: BuildConfiguration
): Promise<BuildIncremental | void> => {
  logger.newLine();
  logger.information(
    `Build started on ${configuration.sourceRoot} to ${configuration.serverRoot}`
  );
  logger.startTrace();

  const builder = build({
    bundle: true,
    entryPoints: [configuration.entryPoint],
    outfile: configuration.outFile,
    incremental: true,
    sourcemap: true,
    define: { 'process.env.NODE_ENV': '"development"' },
  })
    .catch(() => {
      logger.error('Errors found during build.');
    })
    .finally(() => {
      logger.information('Build ended in', true);
      logger.newLine();
    });

  return builder;
};

const startRebuild = (path: string, builder: BuildIncremental) => {
  logger.information('Rebuild started');
  logger.startTrace();

  builder
    .rebuild()
    .catch(() => {
      logger.error('Errors found during rebuild.');
    })
    .finally(() => {
      logger.information('Rebuild ended in', true);
    });
};

export const transformDefaultPage = (
  configuration: BuildConfiguration
): void => {
  const fileContents = fs.readFileSync(configuration.defaultPage, 'utf8');
  const newFileContents = fileContents.replace('index.tsx', 'index.js');

  fs.writeFileSync(configuration.transformedPage, newFileContents, 'utf8');
};

export const startFileWatcher = (
  configuration: BuildConfiguration,
  builder: BuildIncremental
): void => {
  chokidar
    .watch(configuration.watchedFiles, {
      ignoreInitial: true,
      interval: 0,
    })
    .on('add', (path: string) => {
      logger.newLine();
      logger.warning(`File added ${path}`);

      startRebuild(path, builder);
    })
    .on('change', (path: string) => {
      logger.newLine();
      logger.warning(`File changed ${path}`);

      startRebuild(path, builder);
    })
    .on('unlink', (path: string) => {
      logger.newLine();
      logger.warning(`File deleted ${path}`);

      startRebuild(path, builder);
    });
};

export const startWebServer = (configuration: BuildConfiguration): void => {
  liveServer.start({
    root: configuration.serverRoot,
    port: configuration.serverPort,
    open: false,
  });
};
