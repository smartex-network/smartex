import { createActions } from 'redux-actions'

import ReduxUtils from 'utils/redux'

const {
  user: {
    fetchData,
  },
} = createActions({
  user: {
    FETCH_DATA: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
  },
})

const fetchDataRequest = ReduxUtils.waitForAction(
  fetchData.request,
  fetchData.requestSuccessed,
  fetchData.requestFailed,
)

export {
  fetchData,
  fetchDataRequest,
}
