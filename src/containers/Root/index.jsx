import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route, Redirect } from 'react-router'
import MetaTags from 'react-meta-tags'
import { I18n } from 'react-redux-i18n'

import flow from 'lodash/flow'

import { App } from 'ducks'

import { SignIn, SignUp, SignOut } from 'containers/Authentication'
import Home from 'containers/Home'
import Panel from 'containers/Panel'
import FAQ from 'containers/FAQ'
import HowItWorks from 'containers/HowItWorks'
import HowTo from 'containers/HowTo'

import FullScreenMenuHOC from 'components/FullScreenMenu'
import ProtectedRoute from 'components/ProtectedRoute'

import PathUtils from 'utils/path'

import './styles.css'

const Root = ({ initialize, showMenu, onToggleMenu }) => {
  useEffect(() => {
    initialize()
  }, []) // eslint-disable-line

  return (
    <div styleName="app">
      <MetaTags>
        <title>{ I18n.t('title') }</title>
        <meta name="description" content={ I18n.t('description') } />
        <meta property="og:title" content={ I18n.t('title') } />
        <meta property="og:description" content={ I18n.t('description') } />
      </MetaTags>
      <Switch>
        <Route
          exact
          path={ PathUtils.localePath('') }
          render={ props => <Home showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } /> }
        />
        <Route
          path={ PathUtils.localePath('faq') }
          render={ props => <FAQ showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } /> }
        />
        <Route
          path={ PathUtils.localePath('how-it-works') }
          render={ props => (
            <HowItWorks showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } />
          ) }
        />
        <Route
          path={ PathUtils.localePath('how-to') }
          render={ props => (
            <HowTo showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } />
          ) }
        />

        <Route
          path={ PathUtils.localePath('sign-in') }
          render={ props => <SignIn showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } /> }
        />
        <Route
          path={ PathUtils.localePath('sign-up') }
          render={ props => <SignUp showMenu={ showMenu } onToggleMenu={ onToggleMenu } { ...props } /> }
        />
        <Route path="/sign-out" component={ SignOut } />

        <ProtectedRoute path={ PathUtils.localePath('panel') } component={ Panel } />

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

Root.propTypes = {
  initialize: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initialize: App.initRequest,
}, dispatch)

export default flow([
  connect(null, mapDispatchToProps),
  FullScreenMenuHOC,
])(Root)
