export type BuildConfiguration = {
  serverPort: number;
  serverRoot: string;
  outFile: string;

  sourceRoot: string;
  entryPoint: string;

  watchedFiles: string;
};

const ConfigurationDefaults: BuildConfiguration = {
  serverPort: 1234,
  serverRoot: 'dist',
  outFile: 'index.js',

  sourceRoot: 'src',
  entryPoint: 'index.tsx',

  watchedFiles: 'ts,tsx',
};

export const getConfiguration = (): BuildConfiguration => {
  const configuration: BuildConfiguration = { ...ConfigurationDefaults };

  configuration.serverRoot = `./${configuration.serverRoot}`;
  configuration.outFile = `${configuration.serverRoot}/${configuration.outFile}`;

  configuration.sourceRoot = `./${configuration.sourceRoot}`;
  configuration.entryPoint = `${configuration.sourceRoot}/${configuration.entryPoint}`;

  configuration.watchedFiles = `${configuration.sourceRoot}/**/*.{${configuration.watchedFiles}}`;

  return configuration;
};
