import { handleActions } from 'redux-actions'

import produce from 'immer'

import { fetch } from './actions'

const initialState = {
  data: {
    totalUsers: 0,
    totalAmount: '0',
    txsCount: 0,
    currentUserID: 0,
    usersPerLevel: {},
  },
  error: null,
}

/* eslint-disable no-param-reassign */

export default handleActions({
  [fetch.requestSuccessed]: (state, action) => produce(state, next => {
    next.data = {
      ...state.data,
      ...action.payload,
    }
  }),
}, initialState)

/* eslint-enable no-param-reassign */
