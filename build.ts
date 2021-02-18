import chokidar from 'chokidar';
import { build, BuildIncremental } from 'esbuild';
import liveServer from 'live-server';

const serverPort = 1234;
const serverRoot = 'build';

const sourceRoot = 'src';
const entryPoint = `./${sourceRoot}/index.tsx`;
const outFile = `./${serverRoot}/index.js`;

let builder: BuildIncremental;

const initBuild = async () => {
  builder = await build({
    bundle: true,
    entryPoints: [entryPoint],
    outfile: outFile,
    incremental: true,
    define: { 'process.env.NODE_ENV': '"development"' },
  });
};

const initWatcher = () => {
  chokidar
    .watch(`./${sourceRoot}/**/*.{ts,tsx}`, {
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
    root: serverRoot,
    port: serverPort,
    open: false,
  });
};

const run = async () => {
  await initBuild();
  initWatcher();
  startServer();
};

run();
