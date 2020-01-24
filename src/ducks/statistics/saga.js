import {
  takeLatest, put, call,
} from 'redux-saga/effects'

import { SocketService } from 'services'

import {
  fetch,
  fetchRequest,
} from './actions'

function* fetchTask() {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = fetch

  yield put(requestStarted())

  try {
    const { totalUsers, totalIncome, usersPerLevel } = yield call(SocketService.getStatistics)

    yield put(requestSuccessed({
      totalUsers,
      totalAmount: totalIncome,
      usersPerLevel,
    }))
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

export default function* () {
  yield takeLatest(fetchRequest, fetchTask)
}
