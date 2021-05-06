module.exports = {
  stories: [
    '../packages/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../src/**/*.stories.@(mdx|js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    );

    // push our custom easy one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            // Key config
            modules: true,
          },
        },
      ],
    });

    // Set priority order for stor(ies) source files
    config.resolve.mainFields = ['src', 'module', 'main'];

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
