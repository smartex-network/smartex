import { i18nReducer } from 'react-redux-i18n'
import { persistReducer } from 'redux-persist'

import storage from 'localforage'

export default persistReducer({
  key: 'i18n',
  whitelist: [ 'locale' ],
  storage,
}, i18nReducer)
