const withCss = require('@zeit/next-css')
const withTs = require('@zeit/next-typescript')
const withAssets = require('next-assets-import')

export const isDev = process.env.NODE_ENV !== 'production'

module.exports = withTs(withAssets(withCss({
  cssModules: true,
  cssLoaderOptions: {
    namedExport: true,
    camelCase: true,
    importLoaders: 1,
    localIdentName: isDev
      ? '[local]--[hash:base64:5]'
      : '[hash:base64:5]',
    sourceMap: isDev
  }
})))