import * as types from './types'

export const getDetailMovies = (id) => ({
    type: types.GET_DETAIL_MOVIE, id
})
export const loadingDetail = (loading) => ({
    type: types.LOADING_DETAIL, loading
})
export const getDetailMoviesSuccess = (data) => ({
    type: types.DETAIL_MOVIE_SUCCESS, data 
})
export const getDetailMoviesFailure = (error) => ({
    type: types.DETAIL_MOVIE_FAIL, error
})