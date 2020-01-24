import { handleActions } from 'redux-actions'

import produce from 'immer'

import { signOut } from 'ducks/auth/actions'

import { fetchData } from './actions'

const initialState = {
  data: {},
  error: null,
}

/* eslint-disable no-param-reassign */

export default handleActions({
  [fetchData.requestSuccessed]: (state, action) => produce(state, next => {
    next.data = action.payload
  }),

  [signOut.requestSuccessed]: state => produce(state, next => {
    next.data = {}
  }),
}, initialState)

/* eslint-enable no-param-reassign */
