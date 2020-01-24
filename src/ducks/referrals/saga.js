import {
  takeLatest, put, call,
} from 'redux-saga/effects'

import { SocketService } from 'services'

import arrayToTree from 'array-to-tree'

import {
  fetch,
  fetchRequest,
} from './actions'

function* fetchTask(action) {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = fetch

  yield put(requestStarted())

  try {
    const data = yield call(SocketService.getReferrals, action.payload)

    const tree = arrayToTree(data, {
      parentProperty: 'parent',
    })

    yield put(requestSuccessed({ tree: tree[0] }))
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

export default function* () {
  yield takeLatest(fetchRequest, fetchTask)
}
