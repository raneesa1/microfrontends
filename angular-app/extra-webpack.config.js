const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { merge } = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  return merge(singleSpaWebpackConfig, {
    output: {
      library: 'angular-app',
      libraryTarget: 'umd',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js'
    },
  });
};
