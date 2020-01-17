const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/product' : '/',
  css: {       
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportUnit: 'vw', 
            fontViewportUnit: 'vw', 
            viewportWidth: 375,
            selectorBlackList: ['.ignore', '.hairlines'],
            unitToConvert: 'px'
          })
        ]
      }
    }
  },
  publicPath: "/mobile",
  configureWebpack: {
    performance: {
      hints: false
    },
    plugins: [
      new CopyWebpackPlugin([
        { 
          from: "WEB-INF",
          to: 'WEB-INF',
          toType: 'dir'
        }
      ])
    ]
  }
};