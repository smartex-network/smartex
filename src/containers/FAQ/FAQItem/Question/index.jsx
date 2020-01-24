import React from 'react'
import PropTypes from 'prop-types'

import Svg from 'components/Svg'

import PathUtils from 'utils/path'

import './styles.css'

const Question = ({ children }) => (
  <div styleName="question">
    <div styleName="icon">
      <Svg src={ PathUtils.getImagePath('question.svg') } />
    </div>
    { children }
  </div>
)

Question.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Question
