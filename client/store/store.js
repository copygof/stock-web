import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = [thunk, routeMiddleware, logger]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer, compose(
    applyMiddleware(...middleware)
  ))
  let persistor = persistStore(store)
  return { store, persistor }
}

const { store, persistor } = configureStore()

export {
  store,
  persistor
}
export default store

