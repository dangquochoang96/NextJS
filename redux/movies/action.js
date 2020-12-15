import * as types from './types'

export const searchMovies = (name) => ({
    type: types.SEARCH_MOVIES, name
})
export const startSearchMovie = (loading) => ({
    type: types.START_SEARCH, loading
})
export const cancelSearchMovie = (loading) => ({
    type: types.CANCELLED_SEARCH, loading
})
export const searchMovieSuccess = (data) => ({
    type: types.SEARCH_SUCCESS, data
})
export const searchMovieFailure = (error) => ({
    type: types.SEARCH_FAILURE, error
})