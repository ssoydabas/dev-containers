module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    comments: true,
    plugins: [
      "transform-inline-environment-variables",
      [
        "module-resolver",
        {
          alias: {
            "~root": "./src/",
          },
        },
      ],
    ],
  };
};
