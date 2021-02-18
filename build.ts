import { build } from 'esbuild';
import liveServer from 'live-server';

const serverPort = 1234;
const serverRoot = 'build';

const entryPoint = './src/index.tsx';
const outFile = `./${serverRoot}/index.js`;

const initBuild = async () => {
  await build({
    bundle: true,
    entryPoints: [entryPoint],
    outfile: outFile,
    define: { 'process.env.NODE_ENV': '"development"' },
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
  startServer();
};

run();
