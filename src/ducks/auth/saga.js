import {
  takeLatest, call, put, putResolve,
} from 'redux-saga/effects'

import { I18n } from 'react-redux-i18n'

import Web3 from 'web3'

import { Web3Service } from 'services'

import { initRequest } from 'ducks/app/actions'

import ErrorUtils from 'utils/error'

import {
  signIn,
  signInRequest,

  signOut,
  signOutRequest,
} from './actions'

function* signInTask(action) {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = signIn

  yield put(requestStarted())

  try {
    if (!~~action.payload && !Web3.utils.isAddress(action.payload)) {
      throw ErrorUtils.makeInternal(I18n.t('auth.errors.invalidID'))
    }

    let address

    if (Web3.utils.isAddress(action.payload)) {
      address = action.payload
    } else {
      address = yield call(Web3Service.getUserAddressByID, ~~action.payload)
    }

    const isRegistered = yield call(Web3Service.checkAddressRegistered, address)

    if (!isRegistered) {
      throw ErrorUtils.makeInternal(I18n.t('auth.errors.addressNotFound'))
    }

    yield put(requestSuccessed(address))

    yield putResolve(initRequest())
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

function* signOutTask() {
  const {
    requestStarted,
    requestSuccessed,
    requestFailed,
    requestFinished,
  } = signOut

  yield put(requestStarted())

  try {
    yield put(requestSuccessed())
  } catch (err) {
    yield put(requestFailed(err))
  }

  yield put(requestFinished())
}

export default function* () {
  yield takeLatest(signInRequest, signInTask)
  yield takeLatest(signOutRequest, signOutTask)
}
