import {
  takeLatest, put, call, select,
} from 'redux-saga/effects'

import { SocketService, Web3Service } from 'services'

import {
  fetchData,
  fetchDataRequest,
} from './actions'

function* fetchDataTask() {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = fetchData

  yield put(requestStarted())

  /* eslint-disable-next-line */
  const selectedAccount = yield select(state => state.auth.selectedAccount)

  try {
    const user = yield call(SocketService.getUser, selectedAccount)
    const ethUser = yield call(Web3Service.getUserByAddress, selectedAccount)

    yield put(requestSuccessed({
      ...user,
      id: ~~ethUser.id,
    }))
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

export default function* () {
  yield takeLatest(fetchDataRequest, fetchDataTask)
}
