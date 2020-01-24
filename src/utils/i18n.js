function getPluralFormRU(n) {
  const r = Math.floor(Math.abs(n))

  /* eslint-disable */
  return String(r).match(/1(1|2|3|4)$/) ? 'many'
        : String(r).match(/1$/) ? 'one'
        : String(r).match(/(2|3|4)$/) ? 'few'
          : 'many'
}

function getPluralFormEn(n) {
  const r = Math.floor(Math.abs(n))

  return r === 1 ? 'one' : 'other'
}

export function getPluralForm(lang, n) {
  if (lang === 'ru') {
    return getPluralFormRU(n)
  } else if (lang === 'en' || lang === 'es' || lang === 'de') {
    return getPluralFormEn(n)
  }

  return n
}
