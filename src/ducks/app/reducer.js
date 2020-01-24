import { handleActions } from 'redux-actions'

import produce from 'immer'

import { init } from './actions'

const initialState = {
  loading: false,
  isInitialized: false,
  error: null,
}

/* eslint-disable no-param-reassign */

export default handleActions({
  [init.requestStarted]: state => produce(state, next => {
    next.loading = true
  }),

  [init.requestSuccessed]: state => produce(state, next => {
    next.isInitialized = true
  }),

  [init.requestFailed]: (state, action) => produce(state, next => {
    next.error = action.payload
  }),

  [init.requestFinished]: state => produce(state, next => {
    next.loading = false
  }),
}, initialState)

/* eslint-enable no-param-reassign */
