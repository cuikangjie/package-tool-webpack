import webpack from "webpack";

import ora from "ora";

import { error, logger } from "./util";

export const build = (config, callBack) => {
  if (!config) {
    throw new Error(`Configuration is required`);
    return;
  }
  const spinner = ora();

  spinner.color = "green";

  spinner.start("编译中...");

  const compiler = webpack(config, (err: any, stats) => {
    if (err) {
      spinner.fail(`编译失败~ `);

      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }

      callBack && callBack(true);
      return;
    }
  });

  if (compiler) {
    compiler.run(() => {});

    compiler.hooks.done.tap("server", (stats) => {
      if (stats.hasErrors()) {
        spinner.fail(`编译失败~ `);

        error(stats);

        callBack && callBack(true);

        return;
      }
      spinner.succeed(`编译成功~ `);

      callBack && callBack();

      logger(stats);
    });
  }
};
