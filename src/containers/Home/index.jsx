import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Cookies from 'universal-cookie'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from './Main'
import About from './About'
import HowTo from './HowTo'
import Duration from './Duration'
import ProjectStructure from './ProjectStructure'
import UsefulLinks from './UsefulLinks'

const Home = ({ selectedAccount, showMenu, onToggleMenu }) => {
  useEffect(() => {
    const { location } = window
    const ref = location.search.slice(1).split('&').find(part => part.startsWith('ref='))

    if (!ref) {
      return
    }

    const refID = ref.split('=')[1]

    if (Number.isNaN(parseInt(refID, 10))) {
      return
    }

    const cookies = new Cookies()

    cookies.set('refID', refID, { path: '/' })
  })

  return (
    <>
      <Header placement="home" showMenu={ showMenu } onToggleMenu={ onToggleMenu } />
      <Main selectedAccount={ selectedAccount } />
      <About />
      <HowTo />
      <Duration />
      <ProjectStructure />
      <UsefulLinks />
      <Footer />
    </>
  )
}

Home.propTypes = {
  selectedAccount: PropTypes.string,
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

Home.defaultProps = {
  selectedAccount: null,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

export default connect(mapStateToProps)(Home)
