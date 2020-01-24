import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import NavLink from '../NavLink'

import styles from './styles.css'

const Content = ({ onNavigate }) => (
  <main styleName="content">
    <section id="smartex">
      <h2>Smartex</h2>

      <p>
        <Translate value="howItWorks.smartex.1" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.smartex.2" />
      </p>

      <p>
        <Translate value="howItWorks.smartex.3" />
      </p>
    </section>

    <section id="instruction">
      <h3>
        <Translate value="howItWorks.instruction.title" />
      </h3>

      <p styleName="epigraph">
        <Translate value="howItWorks.instruction.epigraph" />
      </p>

      <p>
        <Translate value="howItWorks.instruction.1" />
        { ' ' }
        <Link to="/faq/ethereum">
          <Translate value="common.faqEth" />
        </Link>
        ).
      </p>
    </section>

    <section id="registration">
      <h3>
        <Translate value="auth.registration" />
      </h3>

      <p styleName="epigraph">
        <Translate value="howItWorks.registration.epigraph" />
      </p>

      <p>
        <Translate value="howItWorks.registration.1" dangerousHTML />
        { ' ' }
        <NavLink
          style={ { display: 'inline' } }
          styleName="note"
          to="#marketing"
          onNavigate={ onNavigate }
        >
          &ldquo;
          <Translate value="howItWorks.marketing.title" />
          &rdquo;
        </NavLink>
        { '). ' }
        <Translate value="howItWorks.registration.2" dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.registration.3" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.registration.4" />
        { ' ' }
        <Link to="/faq/ethereum">
          <Translate value="common.faqEth" />
        </Link>
        .
      </p>
    </section>

    <section id="login">
      <h3>
        <Translate value="howItWorks.login.title" />
      </h3>

      <p styleName="epigraph">
        <Translate value="howItWorks.login.epigraph" />
      </p>

      <p>
        <Translate value="howItWorks.login.1" />
      </p>

      <p>
        <Translate value="howItWorks.login.2" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.login.3" />
      </p>
    </section>

    <section id="earning">
      <h2>
        <Translate value="howItWorks.earning.title" />
      </h2>

      <p styleName="epigraph">
        <Translate value="howItWorks.earning.epigraph" />
      </p>

      <p>
        <Translate value="howItWorks.earning.1" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.earning.2" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.earning.3" />
      </p>

      <ol>
        <li>
          <Translate value="howItWorks.earning.list.1" />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.2" />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.3" />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.4" />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.5" />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.6" dangerousHTML />
        </li>
        <li>
          <Translate value="howItWorks.earning.list.7" />
        </li>
      </ol>
    </section>

    <section id="marketing">
      <h3>
        <Translate value="howItWorks.marketing.title" />
      </h3>

      <p>
        <Translate value="howItWorks.marketing.1" class={ styles.note } dangerousHTML />
      </p>

      <h4>
        <Translate value="howItWorks.marketing.2" dangerousHTML />
      </h4>

      <p>
        <Translate value="howItWorks.marketing.3" />
      </p>

      <h4>
        <Translate value="howItWorks.marketing.4" />
      </h4>

      <p>
        <Translate value="howItWorks.marketing.5" />
      </p>
    </section>

    <section id="level_1">
      <h3>
        <Translate value="common.levelNum" level="1" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.1.1" />
      </p>

      <p>
        <Translate value="howItWorks.levels.1.2" />
      </p>
    </section>

    <section id="level_2">
      <h3>
        <Translate value="common.levelNum" level="2" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.2.1" dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.levels.2.2" />
      </p>

      <p>
        <Translate value="howItWorks.levels.2.3" />
      </p>
    </section>

    <section id="level_3">
      <h3>
        <Translate value="common.levelNum" level="3" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.3.1" />
      </p>

      <p>
        <Translate value="howItWorks.levels.3.2" />
      </p>
    </section>

    <section id="level_4">
      <h3>
        <Translate value="common.levelNum" level="4" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.4.1" />
      </p>
    </section>

    <section id="level_5">
      <h3>
        <Translate value="common.levelNum" level="5" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.5.1" />
      </p>
    </section>

    <section id="level_6">
      <h3>
        <Translate value="common.levelNum" level="6" />
      </h3>

      <p>
        <Translate value="howItWorks.levels.6.1" dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.levels.6.2" />
      </p>
    </section>

    <section id="repeat">
      <h2>Repeat</h2>

      <p>
        <Translate value="howItWorks.repeat.1" dangerousHTML />
      </p>
    </section>

    <section id="what_if">
      <h3>
        <Translate value="howItWorks.whatIf.title" />
      </h3>

      <p styleName="epigraph">
        <Translate value="howItWorks.whatIf.1" />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.2" />
      </p>

      <p styleName="epigraph">
        <Translate value="howItWorks.whatIf.3" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.4" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.5" />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.6" />
      </p>

      <p styleName="epigraph">
        <Translate value="howItWorks.whatIf.7" />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.8" class={ styles.note } dangerousHTML />
      </p>

      <p>
        <Translate value="howItWorks.whatIf.9" class={ styles.note } dangerousHTML />
      </p>

      <br />

      <p>
        <Translate value="howItWorks.whatIf.10" />
      </p>
    </section>
  </main>
)

Content.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default Content
