module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== "/\\.css$/"
    );

    // push our custom easy one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // Key config
            modules: true,
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
  /*  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader?modules&importLoaders"],
      // include: path.resolve(__dirname, '../'),
    });

    return config;
  }, */
};
