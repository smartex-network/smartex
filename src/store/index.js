import { applyMiddleware, createStore, compose } from 'redux'

import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import createReduxWaitForMiddleware from 'redux-wait-for-action'

import { persistStore } from 'redux-persist'

import rootReducer, { saga, Store as StoreActions } from 'ducks'

const configureStore = (initialState, history) => {
  const reduxDevTool = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeWithDevTools = !reduxDevTool ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

  const sagaMiddleware = createSagaMiddleware()

  const appliedMiddlewares = [
    thunkMiddleware,
    sagaMiddleware,
    createReduxWaitForMiddleware(),
    routerMiddleware(history),
  ]

  const middlewares = composeWithDevTools(applyMiddleware(...appliedMiddlewares))
  const store = createStore(rootReducer(history), initialState, middlewares)

  const persistor = persistStore(store, null, () => {
    store.dispatch(StoreActions.ready())
  })

  sagaMiddleware.run(saga)

  return {
    store,
    persistor,
  }
}

export { configureStore }
