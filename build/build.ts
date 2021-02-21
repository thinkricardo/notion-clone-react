import {
  getConfiguration,
  startBuild,
  transformDefaultPage,
  startFileWatcher,
  startWebServer,
} from './build.utils';

const run = async () => {
  const configuration = getConfiguration();

  const builder = await startBuild(configuration);

  if (builder) {
    transformDefaultPage(configuration);

    startFileWatcher(configuration, builder);
    startWebServer(configuration);
  }
};

run();
