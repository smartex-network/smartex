import React from 'react'

import { Provider } from 'react-redux'

import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import {
  I18n, loadTranslations, setLocale, syncTranslationWithStore,
} from 'react-redux-i18n'

import { PersistGate } from 'redux-persist/integration/react'

import { setAutoFreeze } from 'immer'

import locales from 'locales'
import Root from 'containers/Root'

import ScrollToTop from 'components/ScrollToTop'

import { StoreService } from 'services'
import { configureStore } from 'store'

const history = createBrowserHistory()

const { store, persistor } = configureStore({}, history)

syncTranslationWithStore(store)
I18n.setHandleMissingTranslation(key => `Missing translation: \`${key}\``)

store.dispatch(loadTranslations(locales))
store.dispatch(setLocale('ru'))

StoreService.setStore(store)

setAutoFreeze(false)

const App = () => (
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
      <ConnectedRouter history={ history }>
        <ScrollToTop>
          <Root />
        </ScrollToTop>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
