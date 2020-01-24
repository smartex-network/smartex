import React from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import { Group } from '@vx/group'
import { Tree as HTree } from '@vx/hierarchy'
import { hierarchy } from 'd3-hierarchy'

import isEmpty from 'lodash/isEmpty'

import Button from 'components/Button'

import NodeLinks from './NodeLinks'
import Nodes from './Nodes'

import './styles.css'

class Tree extends React.Component {
  state = {
    expandAll: false,
    fromNode: false,
  }

  handleExpandAll = () => this.setState(state => ({
    expandAll: !state.expandAll,
    fromNode: false,
  }))

  render() {
    const {
      elements,
      width,
      height,
      margin,
      fullscreen,
      onFullscreenToggle,
    } = this.props

    if (isEmpty(elements)) {
      return null
    }

    const { fromNode, expandAll } = this.state

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const origin = { x: 0, y: 0 }

    const toggle = elm => {
      // eslint-disable-next-line
      elm.expanded = expandAll
      if (elm.hasReferrals) {
        elm.children.forEach(ref => toggle(ref))
      }
    }

    if (!fromNode) {
      toggle(elements)
    }

    const root = hierarchy(elements, d => (d.expanded ? d.children : null))

    return (
      <div styleName="tree">
        <div className="d-flex mt-2 mx-2">
          <Button onClick={ this.handleExpandAll }>
            <Translate value={ expandAll ? 'actions.collapse' : 'actions.expand' } />
          </Button>

          <Button className="ml-auto" onClick={ onFullscreenToggle }>
            <Translate value={ !fullscreen ? 'actions.fullscreen' : 'actions.back' } />
          </Button>
        </div>

        <svg width={ width } height={ height }>
          <rect width={ width } height={ height } rx={ 14 } fill="none" />
          <HTree
            top={ margin.top }
            left={ margin.left }
            root={ root }
            size={ [ innerWidth, innerHeight ] }
            separation={ (a, b) => (a.parent === b.parent ? 1 : 3) / a.depth }
          >
            { data => (
              <Group top={ origin.y + 50 } left={ origin.x + 30 }>
                <NodeLinks
                  links={ data.links() }
                  linkType="diagonal"
                  layout="cartesian"
                  orientation="vertical"
                  stepPercent={ 0.5 }
                />

                <Nodes
                  nodes={ data.descendants() }
                  layout="cartesian"
                  orientation="vertical"
                  onNodeClick={ node => {
                    if (!node.data.expanded) {
                      node.data.x0 = node.x // eslint-disable-line
                      node.data.y0 = node.y // eslint-disable-line
                    }
                    this.setState({ fromNode: true })
                    node.data.expanded = !node.data.expanded // eslint-disable-line
                    if (node.data.id === root.data.id && !node.data.expanded) {
                      this.setState({ expandAll: false })
                    }
                    this.forceUpdate()
                  } }
                />
              </Group>
            ) }
          </HTree>
        </svg>
      </div>
    )
  }
}

Tree.propTypes = {
  elements: PropTypes.shape({}),
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
  fullscreen: PropTypes.bool.isRequired,
  onFullscreenToggle: PropTypes.func.isRequired,
}

Tree.defaultProps = {
  elements: {},
  width: 980,
  height: 600,
  margin: {
    top: 50,
    left: 30,
    right: 30,
    bottom: 30,
  },
}

export default Tree
