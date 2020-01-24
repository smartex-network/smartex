import { handleActions } from 'redux-actions'
import { persistReducer } from 'redux-persist'

import storage from 'localforage'

import produce from 'immer'

import { signIn, signOut } from './actions'

const initialState = {
  selectedAccount: null,
  error: null,
}

/* eslint-disable no-param-reassign */

const reducer = handleActions({
  [signIn.requestStarted]: state => produce(state, next => {
    next.error = null
  }),

  [signIn.requestSuccessed]: (state, action) => produce(state, next => {
    next.selectedAccount = action.payload
  }),

  [signIn.requestFailed]: (state, action) => produce(state, next => {
    next.error = action.payload
  }),

  [signOut.requestSuccessed]: state => produce(state, next => {
    next.selectedAccount = null
  }),
}, initialState)

/* eslint-enable no-param-reassign */

export default persistReducer({
  key: 'auth',
  storage,
}, reducer)
