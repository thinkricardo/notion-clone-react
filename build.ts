import { build } from 'esbuild';

const entryPoint = './src/index.tsx';
const outFile = './build/index.js';

const initBuild = async () => {
  await build({
    bundle: true,
    entryPoints: [entryPoint],
    outfile: outFile,
    define: { 'process.env.NODE_ENV': '"development"' },
  });
};

initBuild();
