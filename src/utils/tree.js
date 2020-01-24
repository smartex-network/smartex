export default class TreeUtils {
  static findCollapsedParent(node) {
    if (!node) {
      return null
    }

    if (!node.data.expanded) {
      return node
    } if (node.parent) {
      return TreeUtils.findCollapsedParent(node.parent)
    }

    return null
  }

  static getToLeft(node, layout, orientation) {
    if (orientation === 'vertical') {
      return {
        top: node.y,
        left: node.x,
      }
    }
    return {
      top: node.x,
      left: node.y,
    }
  }
}
