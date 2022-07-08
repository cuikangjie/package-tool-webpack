const tool = require("../lib");

const path = require("path");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};

tool.run(config, () => {
  console.log("finished");
});
