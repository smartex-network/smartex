import React from 'react'
import PropTypes from 'prop-types'

import { Group } from '@vx/group'
import { NodeGroup } from 'react-move'

import TreeUtils from 'utils/tree'

import NodeLink from '../NodeLink'

const NodeLinks = ({
  links, linkType, layout, orientation, stepPercent,
}) => (
  <NodeGroup
    data={ links }
    keyAccessor={ d => `${d.source.data.id}_${d.target.data.id}` }
    start={ ({ source }) => ({
      source: {
        x: source.data.x0 || source.x,
        y: source.data.y0 || source.y,
      },
      target: {
        x: source.data.x0 || source.x,
        y: source.data.y0 || source.y,
      },
    }) }
    enter={ ({ source, target }) => ({
      source: {
        x: [ source.x ],
        y: [ source.y ],
      },
      target: {
        x: [ target.x ],
        y: [ target.y ],
      },
    }) }
    update={ ({ source, target }) => ({
      source: {
        x: [ source.x ],
        y: [ source.y ],
      },
      target: {
        x: [ target.x ],
        y: [ target.y ],
      },
    }) }
    leave={ ({ source }) => {
      const collapsedParent = TreeUtils.findCollapsedParent(source)

      return {
        source: {
          x: [ collapsedParent.data.x0 || 370 ],
          y: [ collapsedParent.data.y0 || 0 ],
        },
        target: {
          x: [ collapsedParent.data.x0 || 370 ],
          y: [ collapsedParent.data.y0 || 0 ],
        },
      }
    } }
  >
    { nodes => (
      <Group>
        { nodes.map(({ key, state }) => (
          <NodeLink
            key={ key }
            data={ state }
            linkType={ linkType }
            layout={ layout }
            orientation={ orientation }
            stepPercent={ stepPercent }
            stroke="#b0b0b0"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </Group>
    ) }
  </NodeGroup>
)

NodeLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  layout: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  linkType: PropTypes.string.isRequired,
  stepPercent: PropTypes.number.isRequired,
}

export default NodeLinks
