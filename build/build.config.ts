import { BuildConfiguration } from './build.types';

export const Configuration: Partial<BuildConfiguration> = {
  serverPort: 1234,
  serverRoot: 'dist',
  outFile: 'index.js',

  sourceRoot: 'src',
  entryPoint: 'index.tsx',

  watchedFiles: 'ts,tsx',

  defaultPage: 'index.html',
};
