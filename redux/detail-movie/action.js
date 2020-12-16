import * as types from './types'

export const getDataMovies = (id) => ({
  type: types.GET_DETAIL_MOVIE,
  id
})
export const loadingDetail = (loading) => ({
  type: types.LOADING_DETAIL,
  loading
})
export const getDataMoviesSuccess = (data) => ({
  type: types.DETAIL_MOVIE_SUCCESS,
  data
})
export const getDataMoviesFailure = (error) => ({
  type: types.DETAIL_MOVIE_FAILURE,
  error
})