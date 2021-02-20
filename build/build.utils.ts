import { BuildConfiguration } from './build.types';
import { Configuration } from './build.config';

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
