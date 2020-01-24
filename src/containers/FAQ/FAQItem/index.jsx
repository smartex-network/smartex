import React from 'react'
import PropTypes from 'prop-types'

import Question from './Question'
import Answer from './Answer'

import './styles.css'

const FAQItem = ({ children }) => (
  <section styleName="faq-item">
    { children }
  </section>
)

FAQItem.propTypes = {
  children: PropTypes.node.isRequired,
}

FAQItem.Question = Question
FAQItem.Answer = Answer

export default FAQItem
