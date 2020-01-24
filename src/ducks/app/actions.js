import { createActions } from 'redux-actions'

import ReduxUtils from 'utils/redux'

const {
  app: {
    init,
  },
} = createActions({
  app: {
    INIT: {
      REQUEST_STARTED: undefined,
      REQUEST_SUCCESSED: undefined,
      REQUEST_FAILED: undefined,
      REQUEST_FINISHED: undefined,
      REQUEST: undefined,
    },
  },
})

const initRequest = ReduxUtils.waitForAction(
  init.request,
  init.requestSuccessed,
  init.requestFailed,
)

export {
  init,
  initRequest,
}
