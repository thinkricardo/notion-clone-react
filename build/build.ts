import { logger } from './build.logger';

import {
  getConfiguration,
  startBuild,
  transformDefaultPage,
  startFileWatcher,
  startWebServer,
} from './build.utils';

const run = async () => {
  logger.clear();

  const configuration = getConfiguration();

  const builder = await startBuild(configuration);

  if (builder) {
    transformDefaultPage(configuration);

    startFileWatcher(configuration, builder);
    startWebServer(configuration);
  }
};

run();
