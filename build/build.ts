import chokidar from 'chokidar';
import { build, BuildIncremental } from 'esbuild';
import fs from 'fs';
import liveServer from 'live-server';

import { BuildConfiguration, getConfiguration } from './build.config';

let configuration: BuildConfiguration;
let builder: BuildIncremental;

const initBuild = async () => {
  builder = await build({
    bundle: true,
    entryPoints: [configuration.entryPoint],
    outfile: configuration.outFile,
    incremental: true,
    sourcemap: true,
    define: { 'process.env.NODE_ENV': '"development"' },
  });
};

const transformDefaultPage = () => {
  const fileContents = fs.readFileSync(configuration.defaultPage, 'utf8');
  const newFileContents = fileContents.replace('index.tsx', 'index.js');

  fs.writeFileSync(configuration.transformedPage, newFileContents, 'utf8');
};

const initWatcher = () => {
  chokidar
    .watch(configuration.watchedFiles, {
      ignoreInitial: true,
      interval: 0,
    })
    .on('add', () => {
      builder.rebuild();
    })
    .on('change', () => {
      builder.rebuild();
    });
};

const startServer = () => {
  liveServer.start({
    root: configuration.serverRoot,
    port: configuration.serverPort,
    open: false,
  });
};

const run = async () => {
  configuration = getConfiguration();

  await initBuild();
  transformDefaultPage();

  initWatcher();
  startServer();
};

run();
