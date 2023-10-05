const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (process.env.ANALYZE === "true") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        path: "web-report",
        analyzerMode: "static",
      })
    );
  }

  config.optimization.usedExports = true;

  config.optimization.splitChunks = {
    chunks: "all",
    name: true,
  };

  return config;
};
