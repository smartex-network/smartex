import React from 'react'
import PropTypes from 'prop-types'

import { Group } from '@vx/group'
import NodeGroup from 'react-move/NodeGroup'

import get from 'lodash/get'

import TreeUtils from 'utils/tree'

import Node from '../Node'

const Nodes = ({
  nodes, layout, orientation, onNodeClick,
}) => (
  <NodeGroup
    data={ nodes }
    keyAccessor={ d => d.data.address }
    start={ node => {
      const parentTopLeft = TreeUtils.getToLeft(node.parent || { x: 0, y: 0 }, layout, orientation)

      return {
        top: parentTopLeft.top,
        left: parentTopLeft.left,
        opacity: 0,
      }
    } }
    enter={ node => {
      const topLeft = TreeUtils.getToLeft(node, layout, orientation)

      return {
        top: [ topLeft.top ],
        left: [ topLeft.left ],
        opacity: [ 1 ],
      }
    } }
    update={ node => {
      const topLeft = TreeUtils.getToLeft(node, layout, orientation)

      return {
        top: [ topLeft.top ],
        left: [ topLeft.left ],
        opacity: [ 1 ],
      }
    } }
    leave={ node => {
      const collapsedParent = TreeUtils.findCollapsedParent(node.parent)
      const collapsedParentPrevPos = {
        x: get(collapsedParent, 'data.x0', 370),
        y: get(collapsedParent, 'data.y0', 0),
      }
      const topLeft = TreeUtils.getToLeft(collapsedParentPrevPos, layout, orientation)

      return {
        top: [ topLeft.top ],
        left: [ topLeft.left ],
        opacity: [ 0 ],
      }
    } }
  >
    { nds => (
      <Group>
        { nds.map(({ key, data: node, state }) => (
          <Group
            key={ key }
            top={ state.top }
            left={ state.left }
            opacity={ state.opacity }
          >
            <Node
              node={ node }
              layout={ layout }
              orientation={ orientation }
              onClick={ () => onNodeClick(node) }
            />
          </Group>
        ))}
      </Group>
    ) }
  </NodeGroup>
)

Nodes.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  layout: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  onNodeClick: PropTypes.func,
}

Nodes.defaultProps = {
  onNodeClick: () => {},
}

export default Nodes
