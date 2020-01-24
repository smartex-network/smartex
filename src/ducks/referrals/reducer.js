import { handleActions } from 'redux-actions'

import produce from 'immer'

import { signOut } from 'ducks/auth/actions'

import { fetch } from './actions'

const initialState = {
  tree: { },
  total: 0,
  error: null,
}

/* eslint-disable no-param-reassign */

export default handleActions({
  [fetch.requestSuccessed]: (state, action) => produce(state, next => {
    const { tree, total } = action.payload

    next.tree = tree
    next.total = total
  }),

  [signOut.requestSuccessed]: state => produce(state, next => {
    next.tree = {}
    next.total = 0
  }),
}, initialState)

/* eslint-enable no-param-reassign */
