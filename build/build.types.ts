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
