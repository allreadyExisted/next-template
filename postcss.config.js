module.exports = {
  plugins: [
    require('postcss-import')({
      path: [
        'theme'
      ]
    }),
    require('postcss-mixins')({
      mixinsDir: [
        'theme/mixins'
      ]
    }),
    require('postcss-cssnext')({ browsers: ['last 2 versions'] }),
    require('postcss-inline-svg')(),
    require('postcss-svgo')()
  ]
}