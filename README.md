# Webpack Commonschunkplugin Dynamic Splitting

This is a solid example of using CommonsChunkPlugin to dynamic split code from a "entry" key,

The examples in `webpack.config.js` uses `minChunks` passing a function and, based on the resource/module path, split it in a separate chunk,

We've a few important points to pay attention:

- **Chunk module "filtering":** Always use the `chunks: [<entryName>]` option, to have "control" from where you're "filtering" the path
- **The "chunks" key is the trick:** Since we're generating entry points "at runtime", if you want to filter something based on a previous CommonsChunkPlugin, you need to use the "name" key as your entry in the `chunks` option

e.g.

```js
// In this example, CommonsChunk [2] will "filter" based
// on the results of the CommonsChunk [1], where CommonsChunk [1]
// will "filter" based on the "app" entry key

// example of webpack.config.js
...
 plugins: [
  ...
  new webpack.optimize.CommonsChunkPlugin({ // [1]
    name: 'common',
    chunks: ['app'],
    minChunks: ({ resource }) => /node_modules/.test(resource)
  }),
  new webpack.optimize.CommonsChunkPlugin({ // [2]
    name: 'vendor',
    chunks: ['common'],
    minChunks: ({ resource }) => /node_modules\/react/.test(resource)
  }),
  ...
 ]
...
```
- **The plugin order doesn't matter:** Since we're using the `chunks` key, you don't need to worry about the CommonsChunkPlugin order in your config
- **The `<script>` load order MATTERS AND IS IMPORTANT:** Have a look in [client/index.html](https://github.com/oieduardorabelo/webpack-commonschunkplugin-dynamic-splitting/blob/master/client/index.html) and check the comments

## Questions and Help

Feel free to open a isse, and I recommend to have a look in these links before anything:

- http://stackoverflow.com/questions/30329337/how-to-bundle-vendor-scripts-separately-and-require-them-as-needed-with-webpack/38733864#38733864
- https://github.com/survivejs/ama/issues/13#issuecomment-271253953
- https://github.com/webpack/webpack/issues/2855#issuecomment-239606760
- http://survivejs.com/webpack/building-with-webpack/splitting-bundles/#loading-dependencies-to-a-vendor-bundle-automatically
- https://github.com/rstacruz/webpack-tricks/pull/1

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [eduardorabelo.me](http://eduardorabelo.me) &nbsp;&middot;&nbsp;
> GitHub [@oieduardorabelo](https://github.com/oieduardorabelo) &nbsp;&middot;&nbsp;
> Twitter [@oieduardorabelo](https://twitter.com/oieduardorabelo)
