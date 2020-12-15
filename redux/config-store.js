import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import rootReducer from './root-reducers'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import rootSaga from './root-saga'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const configRootPersist = {
    key: 'AppMoviePersist', storage, whitelist: ['movie']
}
const rootReducerPersist = persistReducer(configRootPersist, rootReducer)

export const configStore = (loadState = {}) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducerPersist, loadState, applyMiddleware(sagaMiddleware, logger)
    )
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(configStore, { debug: true })