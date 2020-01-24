import { ERROR_TYPES } from 'constants/error-types'

export default class ErrorUtils {
  static makeInternal(message) {
    return Object.assign(new Error(message), { type: ERROR_TYPES.INTERNAL })
  }

  static isInternal(error) {
    return error instanceof Error && error.type === ERROR_TYPES.INTERNAL
  }
}
