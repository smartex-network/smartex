import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import cx from 'classnames'

import Tree from 'components/Tree'

import styles from './styles.css'

const Refs = ({ referrals }) => {
  const [ fullscreen, toggleFull ] = useState(false)
  const [ width, setWidth ] = useState(null)
  const [ height, setHeight ] = useState()
  const wrapRef = useRef(null)

  useEffect(() => {
    function watchWidth() {
      if (fullscreen) {
        setWidth(wrapRef.current.clientWidth + 6000)
      } else {
        setWidth(wrapRef.current.clientWidth)
      }
    }

    watchWidth()
    window.addEventListener('resize', watchWidth)

    return () => {
      window.removeEventListener('resize', watchWidth)
    }
  })

  const handleFullScreen = () => {
    toggleFull(prev => !prev)

    setTimeout(() => {
      document.body.classList.toggle('fullscreen')

      if (!fullscreen) {
        setHeight(wrapRef.current.clientHeight - 60)
      } else {
        setHeight()
      }
    }, 100)
  }

  return (
    <div styleName="referrals">
      <div ref={ wrapRef } className={ cx(styles['tree-wrapper'], { [styles.fullscreen]: fullscreen }) }>
        <Tree
          elements={ referrals }
          width={ width }
          height={ height }
          fullscreen={ fullscreen }
          onFullscreenToggle={ handleFullScreen }
        />
      </div>
    </div>
  )
}

Refs.propTypes = {
  referrals: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
  referrals: state.referrals.tree,
})

export default connect(mapStateToProps)(Refs)
