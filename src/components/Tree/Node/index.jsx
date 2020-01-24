import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import { Group } from '@vx/group'

import styles from './styles.css'

const Node = ({ node, onClick }) => {
  const classes = cx(styles.node, {
    [styles['with-childs']]: node.data.hasReferrals,
    [styles.opened]: node.data.expanded,
  })

  const goToEtherscan = e => {
    e.preventDefault()
    window.open(`https://etherscan.io/address/${node.data.address}`, '_blank')
  }

  return (
    <Group styleName="node-group" onClick={ () => node.data.hasReferrals && onClick() } onContextMenu={ goToEtherscan }>
      <Group fill="#00101d" styleName="id-tt" transform="translate(0, 0)">
        <Group transform="translate(-22, -40)">
          { /* eslint-disable-next-line */ }
          <path d="M24.877907,23.5348837 L22,28.6511628 L19.122093,23.5348837 L4,23.5348837 C1.790861,23.5348837 2.705415e-16,21.7440227 0,19.5348837 L0,4 C-2.705415e-16,1.790861 1.790861,-7.24248182e-14 4,-7.28306304e-14 L40,-7.28306304e-14 C42.209139,-7.02004019e-14 44,1.790861 44,4 L44,19.5348837 C44,21.7440227 42.209139,23.5348837 40,23.5348837 L24.877907,23.5348837 Z" />
        </Group>
        <text
          dy="-24px"
          fontSize="15"
          fontFamily="Montserrat"
          fontWeight="500"
          textAnchor="middle"
          fill="white"
        >
          { node.data.id }
        </text>
      </Group>
      <circle r={ 10 } className={ classes }>
        { node.data.hasReferrals && !node.data.expanded && (
          <>
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="scale"
              values="1; 1.1; 1.2"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate attributeType="XML" attributeName="fill" from="#00101d" to="#005288" dur="1s" repeatCount="indefinite" />
          </>
        )}
      </circle>
      <text
        dy="4px"
        fontSize="12"
        fontFamily="Montserrat"
        fontWeight="500"
        textAnchor="middle"
        fill="white"
      >
        { node.data.level }
      </text>
    </Group>
  )
}

Node.propTypes = {
  node: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      level: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      hasReferrals: PropTypes.bool,
      expanded: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

Node.defaultProps = {
  onClick: () => {},
}

export default Node
