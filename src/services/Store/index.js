import get from 'lodash/get'

import uuidv4 from 'uuid/v4'

export default class StoreService {
  store = null

  unsubscribe = null

  prevState = {}

  state = {}

  subscribes = {}

  setStore = store => {
    if (this.unsubscribe && typeof this.unsubscribe === 'function') {
      this.unsubscribe()
    }

    this.store = store

    this.unsubscribe = store.subscribe(this.handleStoreUpdate)
  }

  dispatch = (...args) => this.store.dispatch(...args)

  handleStoreUpdate = () => {
    this.prevState = this.state
    this.state = this.store.getState()

    Object.keys(this.subscribes).forEach(key => {
      const {
        section,
        onUpdate,
      } = this.subscribes[key]

      const data = get(this.state, section)

      if (get(this.prevState, section) !== data) {
        onUpdate(data)
      }
    })
  }

  subscribe = (section, onUpdate) => {
    const id = uuidv4()

    this.subscribes[id] = {
      section,
      onUpdate,
    }

    return () => {
      delete this.subscribes[id]
    }
  }
}
