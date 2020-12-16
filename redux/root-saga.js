import { all, call } from 'redux-saga/effects'
import { followSearchMovie as movieSaga } from './movies/saga'
import { watchingDetailMovieSaga as detailSaga } from './detail-movie/saga'

export default function* rootSaga(){
  yield all([
    call(movieSaga),
    call(detailSaga)
  ])
}