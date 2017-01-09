var webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/app.jsx',
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
  },
  plugins: [
    //
    // The plugin order here doesn't matter anymore,
    // since we're "filtering" which resource path
    // we want to "extract", and always pointing to
    // the chunk ['app'].
    //
    // If you want to filter based on other CommonsChunk,
    // just pass the correct entry name to the "chunks" entry.
    //
    // e.g.
    //   # In this example, CommonsChunk [2] will "filter" based
    //   # on the results of the CommonsChunk [1], where CommonsChunk [1]
    //   # will "filter" based on the "app" entry key
    //
    //   [1] new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common',
    //     chunks: ['app'],
    //     minChunks: ({ resource }) => /node_modules/.test(resource)
    //   }),
    //   [2] new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     chunks: ['common'],
    //     minChunks: ({ resource }) => /node_modules/react.test(resource)
    //   }),
    //
    //
    //
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'settings',
      chunks: ['app'],
      minChunks: ({ resource }) => /client\/settings/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'dashboard',
      chunks: ['app'],
      minChunks: (target) => /client\/dashboard/.test(target.resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'admin',
      chunks: ['app'],
      minChunks: (target) => /client\/admin/.test(target.resource)
    }),
    //
    // This guys is important to extract the "webpackJsonp" from all
    // generated chunks.
    //
    // If you don't declare this guy, all "dynamic chunks" will have the
    // "webpackJsonp" on the top of the file.
    //
    // Maybe there's a way to "merge" this guy to a parent chunk? (e.g. vendor?)
    //
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader', exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
};
