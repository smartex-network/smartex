import { combineReducers } from 'redux'

import { all, fork } from 'redux-saga/effects'

import storeReducer, { actions as Store } from './store'

import routerReducer from './router'
import i18nReducer from './i18n'

import appReducer, { actions as App, saga as appSaga } from './app'
import authReducer, { actions as Auth, saga as authSaga } from './auth'
import userReducer, { actions as User, saga as userSaga } from './user'
import statisticsReducer, { actions as Statistics, saga as statisticsSaga } from './statistics'
import referralsReducer, { actions as Referrals, saga as referralsSaga } from './referrals'

const reducer = history => combineReducers({
  store: storeReducer,

  router: routerReducer(history),
  i18n: i18nReducer,

  app: appReducer,
  auth: authReducer,
  user: userReducer,
  statistics: statisticsReducer,
  referrals: referralsReducer,
})

function* saga() {
  yield all([
    fork(appSaga),
    fork(authSaga),
    fork(userSaga),
    fork(statisticsSaga),
    fork(referralsSaga),
  ])
}

export {
  reducer as default,

  saga,

  Store,

  App,
  Auth,
  User,
  Statistics,
  Referrals,
}
