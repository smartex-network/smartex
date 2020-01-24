import React from 'react'
import PropTypes from 'prop-types'

import { LinkVertical } from '@vx/shape'

const NodeLink = ({
  data, linkType, layout, orientation, stepPercent, ...props
}) => (
  <LinkVertical
    data={ data }
    percent={ stepPercent }
    stroke="#b0b0b0"
    strokeWidth="1"
    fill="none"
    { ...props }
  />
)

NodeLink.propTypes = {
  data: PropTypes.shape({}).isRequired,
  layout: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  linkType: PropTypes.string.isRequired,
  stepPercent: PropTypes.number.isRequired,
}

export default NodeLink
