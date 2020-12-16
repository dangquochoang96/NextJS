import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from './types'
import * as actions from './action'
import * as api from '../api/movies'

function* detailMovieSaga({id}){
    try {
        yield put(actions.loadingDetail(true))
        const response = yield call(api.getDataMoviesById, id)
        if(response){
            yield put(actions.getDetailMoviesSuccess(response))
        }
    } catch (error) {
        yield put(actions.getDetailMoviesFailure({code: 404, message: 'Movie not found'}))
    } finally {
        yield put(actions.loadingDetail(false))
    }
}
export function* watchingDetailMovieSaga(){
    yield takeEvery(types.GET_DETAIL_MOVIE, detailMovieSaga)
}