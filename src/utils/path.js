export default class PathUtils {
  // eslint-disable-next-line
  static getImagePath = path => require(`assets/images/${path}`)

  // eslint-disable-next-line
  static getLevelImagePath = (typ, path) => require(`assets/images/levels/${typ}/${path}.png`)

  static localePath = path => `/:locale(en|es|ru|de)?/${path}`
}
