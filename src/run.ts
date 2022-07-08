import webpack from "webpack";

import ora from "ora";

import { error } from "./util";

export const run = (config, callBack, compilerOptions?) => {
  if (!config) {
    throw new Error(`Configuration is required`);

    return;
  }
  const spinner = ora();

  spinner.color = "green";

  spinner.start("编译中...");

  const compiler = webpack(config);

  const options = {
    aggregateTimeout: 1000, // 延迟
    ignored: /node_modules/,
    // pool: 1000, // 轮询
    "info-verbosity": "verbose",
    ...(compilerOptions || {}),
  };

  compiler.watch(options, () => {});

  compiler.hooks.watchRun.tap("server", () => {
    spinner.start("重新编译中...");
  });

  compiler.hooks.done.tap("server", (stats) => {
    if (stats.hasErrors()) {
      spinner.fail(`编译失败~ `);

      error(stats);

      callBack && callBack(true);

      return;
    }

    spinner.succeed(`编译成功~ `);

    callBack && callBack();

    error(stats);
  });
};
