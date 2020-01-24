import {
  takeLatest, put, select, putResolve,
} from 'redux-saga/effects'

import { fetchDataRequest } from 'ducks/user/actions'

import { init, initRequest } from './actions'

function* initTask() {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = init

  yield put(requestStarted())

  try {
    const selectedAccount = yield select(state => state.auth.selectedAccount)

    if (selectedAccount) {
      yield putResolve(fetchDataRequest())
    }

    yield put(requestSuccessed())
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

export default function* () {
  yield takeLatest(initRequest, initTask)
}
