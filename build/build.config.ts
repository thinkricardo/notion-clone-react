export type BuildConfiguration = {
  serverPort: number;
  serverRoot: string;
  outFile: string;

  sourceRoot: string;
  entryPoint: string;

  watchedFiles: string;

  defaultPage: string;
  transformedPage: string;
};

const ConfigurationDefaults: Partial<BuildConfiguration> = {
  serverPort: 1234,
  serverRoot: 'dist',
  outFile: 'index.js',

  sourceRoot: 'src',
  entryPoint: 'index.tsx',

  watchedFiles: 'ts,tsx',

  defaultPage: 'index.html',
};

export const getConfiguration = (): BuildConfiguration => {
  const configuration: BuildConfiguration = {
    ...(ConfigurationDefaults as BuildConfiguration),
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
