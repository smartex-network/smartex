import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Answer = ({ children }) => (
  <div styleName="answer">
    { children }
  </div>
)

Answer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Answer
