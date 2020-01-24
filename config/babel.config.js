const paths = require('./paths')
const constants = require('./constants')

module.exports = {
  presets: [
    'react-app'
  ],
  plugins: [
    [
      'react-css-modules',
      {
        context: paths.appSrc,
        exclude: '/node_modules/',
        webpackHotModuleReloading: true,
        generateScopedName: constants.cssModulesScopedNameInterpolatedString,
        handleMissingStyleName: 'throw',
      },
    ],
    [
      require.resolve('babel-plugin-named-asset-import'),
      {
        loaderMap: {
          svg: {
            ReactComponent:
              '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          },
        },
      },
    ],
  ],
}
