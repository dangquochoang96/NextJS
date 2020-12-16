import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import { moviesReducer } from './movies/reducer'
import { persistReducer } from 'redux-persist'
import { detailMovieReducer } from './detail-movie/reducer'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const configMoviePersist = {
  key: 'MoviePersist',
  storage,
  whitelist: ['movies']
}

const rootReducer = combineReducers => ({
  counter: counterReducer,
  movie: persistReducer(configMoviePersist, moviesReducer),
  detail: detailMovieReducer
})
export default rootReducer