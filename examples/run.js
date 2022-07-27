const tool = require("../lib");

const path = require("path");

const config = {
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  resolve: {
    modules: ["src"],

    extensions: [".js", ".json"],
  },
  // externals: [nodeExternals()],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: false,
    setImmediate: true,
  },
  module: {
    // rules: [{ test: /.js$/, loader: "babel-loader" }],
  },
  mode: "development",
};

tool.build(config, () => {
  console.log("finished");
});
