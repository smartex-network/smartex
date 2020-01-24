class ReactUtils {
  static wrapDisplayName(BaseComponent, hocName) {
    return `${hocName}(${ReactUtils.getDisplayName(BaseComponent)})`
  }

  static getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component
    }

    if (!Component) {
      return undefined
    }

    return Component.displayName || Component.name || 'Component'
  }
}

export default ReactUtils
