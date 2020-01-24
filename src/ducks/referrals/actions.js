import { createActions } from 'redux-actions'

import ReduxUtils from 'utils/redux'

const {
  referrals: {
    fetch,
  },
} = createActions({
  referrals: {
    FETCH: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
  },
})

const fetchRequest = ReduxUtils.waitForAction(
  fetch.request,
  fetch.requestSuccessed,
  fetch.requestFailed,
)

export {
  fetch,
  fetchRequest,
}
