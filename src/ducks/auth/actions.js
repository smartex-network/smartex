import { createActions } from 'redux-actions'

import ReduxUtils from 'utils/redux'

const {
  auth: {
    signIn,
    signUp,
    signOut,
  },
} = createActions({
  auth: {
    SIGN_IN: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
    SIGN_UP: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
    SIGN_OUT: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
  },
})

const signInRequest = ReduxUtils.waitForAction(
  signIn.request,
  signIn.requestSuccessed,
  signIn.requestFailed,
)

const signUpRequest = ReduxUtils.waitForAction(
  signUp.request,
  signUp.requestSuccessed,
  signUp.requestFailed,
)

const signOutRequest = ReduxUtils.waitForAction(
  signOut.request,
  signOut.requestSuccessed,
  signOut.requestFailed,
)

export {
  signIn,
  signInRequest,

  signUp,
  signUpRequest,

  signOut,
  signOutRequest,
}
