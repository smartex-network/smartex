const paths = require('./paths')

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-import')({
      path: paths.appSrc,
    }),
    require('postcss-url')({
      url: 'inline',
      basePath: paths.appSrc,
      optimizeSvgEncode: true,
    }),
    require('postcss-global-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'not-pseudo-class': true,
        'custom-media-queries': true,
      },
    }),
    // Adds PostCSS Normalize as the reset css with default options,
    // so that it honors browserslist config in package.json
    // which in turn let's users customize the target behavior as per their needs.
    require('postcss-normalize')(),
  ]
}
