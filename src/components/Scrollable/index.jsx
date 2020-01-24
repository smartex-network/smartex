import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Scrollbars } from 'react-custom-scrollbars'

const Scrollable = ({
  children, horizontal, ...props
}) => {
  const scrollBars = useRef(null)

  const onMouseWheel = e => {
    if (!horizontal) {
      return
    }

    const currentScrollDelta = scrollBars.current.getScrollLeft()

    scrollBars.current.scrollLeft(currentScrollDelta + e.deltaY)
  }

  return (
    <Scrollbars
      autoHide
      autoHeight
      ref={ scrollBars }
      onWheel={ onMouseWheel }
      { ...props }
    >
      { children }
    </Scrollbars>
  )
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Scrollable.defaultProps = {
  horizontal: false,
}

export default Scrollable
