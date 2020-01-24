const paths = require('./paths')

const notIncludePackage = [ 'jayson' ]

module.exports = {
  cssModulesScopedNameInterpolatedString: '[local]__[hash:base64:5]',
  packages: Object.keys(require(paths.appPackageJson).dependencies).filter(package => {
    return !notIncludePackage.includes(package)
  }),
}
