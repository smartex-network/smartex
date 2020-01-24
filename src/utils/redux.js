import { WAIT_FOR_ACTION, ERROR_ACTION, CALLBACK_ERROR_ARGUMENT } from 'redux-wait-for-action'

export default class ReduxUtils {
  static waitForAction = (actionCreator, waitFor, error) => {
    const reduxAction = (...args) => ({
      ...actionCreator(...args),
      [WAIT_FOR_ACTION]: waitFor.toString(),
      [ERROR_ACTION]: error.toString(),
      [CALLBACK_ERROR_ARGUMENT]: action => action.payload,
    })

    reduxAction.toString = actionCreator.toString

    return reduxAction
  }
}
