import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'

import { Link, withRouter } from 'react-router-dom'

import cx from 'classnames'

import Svg from 'components/Svg'

import PathUtils from 'utils/path'

import styles from './styles.css'

const LocaleSwitcher = ({
  locale, history, match, switchLocale,
}) => {
  useEffect(() => {
    const { params } = match

    if (![ 'ru', 'en', 'es', 'de' ].includes(params.locale)) {
      return
    }

    switchLocale(params.locale)
  }, [ match, switchLocale ])

  let path

  if (![ 'ru', 'en', 'es', 'de' ].includes(match.params.locale)) {
    path = history.location.pathname
  } else {
    path = history.location.pathname.slice(3)
  }

  return (
    <div styleName="locale-switcher">
      <Link to={ `/ru${path}` } className={ cx(styles.lang, { [styles.active]: locale === 'ru' }) }>
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath('flags/ru.svg') } />
        </div>
        <div styleName="text">
          RU
        </div>
      </Link>
      <Link to={ `/en${path}` } className={ cx(styles.lang, { [styles.active]: locale === 'en' }) }>
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath('flags/en.svg') } />
        </div>
        <div styleName="text">
          EN
        </div>
      </Link>
      <Link to={ `/de${path}` } className={ cx(styles.lang, { [styles.active]: locale === 'de' }) }>
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath('flags/de.svg') } />
        </div>
        <div styleName="text">
          DE
        </div>
      </Link>
      <Link to={ `/es${path}` } className={ cx(styles.lang, { [styles.active]: locale === 'es' }) }>
        <div styleName="icon">
          <img src={ PathUtils.getImagePath('flags/es.png') } /> { /* eslint-disable-line */ }
        </div>
        <div styleName="text">
          ES
        </div>
      </Link>
    </div>
  )
}

LocaleSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  switchLocale: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  locale: state.i18n.locale,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchLocale: setLocale,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LocaleSwitcher))
