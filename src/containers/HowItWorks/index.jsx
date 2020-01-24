import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Sidebar from './Sidebar'
import Content from './Content'

import './styles.css'

const HowItWorks = ({ showMenu, onToggleMenu }) => {
  const handleNavigate = id => {
    const elem = document.getElementById(id)

    if (!elem) {
      return
    }
    const { top } = elem.getBoundingClientRect()

    window.scrollBy({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const { hash } = window.location

    if (hash) {
      window.location.hash = ''
      setTimeout(() => handleNavigate(hash.slice(1)), 150)
    }
  })

  return (
    <div styleName="how-it-works">
      <Header showMenu={ showMenu } onToggleMenu={ onToggleMenu } />

      <div className="container">
        <h1 styleName="title">
          <Translate value="howItWorks.instruction.title" />
        </h1>

        <h2 styleName="sub-title">
          <Translate value="howItWorks.noEth" />
          { ' ' }
          <Link to="/faq/ethereum">
            <Translate value="common.faqEth" />
          </Link>
          .
        </h2>

        <div className="row">
          <div className="d-none d-md-block col-md-3">
            <Sidebar onNavigate={ handleNavigate } />
          </div>

          <div className="col-12 col-md-9 col-xl-6">
            <Content onNavigate={ handleNavigate } />
          </div>
        </div>
      </div>

      <Footer styleName="footer" />
    </div>
  )
}

HowItWorks.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

export default HowItWorks
