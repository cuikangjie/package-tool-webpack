export const logger = (stats): void => {
  let str = stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  });
  str && process.stdout.write(`${str}\n\n`);
};

export const error = (stats) => {
  let str = stats.toString({
    errors: true,
    warnings: true,
    timings: false,
    hash: false,
    builtAt: false,
    version: false,
    time: false,
    assets: false,
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    entrypoints: false,
  });

  str && process.stdout.write(`${str}\n\n`);
};
