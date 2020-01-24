import React from 'react'
import PropTypes from 'prop-types'

import ReactModal from 'react-modal'

import cx from 'classnames'

import Svg from 'components/Svg'

import PathUtils from 'utils/path'

import styles from './styles.css'

ReactModal.setAppElement('#app')

const contentStyles = {
  base: styles.content,
  afterOpen: styles['content-open'],
  beforeClose: styles['content-close'],
}

const Modal = ({
  onClose, show, fullscreen, children, ...props
}) => {
  const bodyOpenClasses = cx('modal-open', {
    fullscreen,
  })

  return (
    <ReactModal
      bodyOpenClassName={ bodyOpenClasses }
      portalClassName={ cx(styles.modal, { [styles.fullscreen]: fullscreen }) }
      overlayClassName={ styles.overlay }
      className={ contentStyles }
      closeTimeoutMS={ +styles.animationTime }
      isOpen={ show }
      onRequestClose={ onClose }
      { ...props }
    >
      { /* eslint-disable-next-line */ }
      <div styleName="close-modal" onClick={ onClose }>
        <Svg src={ PathUtils.getImagePath('close.svg') } />
      </div>
      <div styleName="modal-container">
        { children }
      </div>
    </ReactModal>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,

  fullscreen: PropTypes.bool,

  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  show: false,
  onClose: () => {},
  fullscreen: false,
}

export default Modal
