export default class UrlUtils {
  static createRefLink = (code, location, locale) => (
    `${location.protocol}//${location.hostname}/${locale !== 'ru' ? `${locale}/` : ''}?ref=${code}`
  )
}
