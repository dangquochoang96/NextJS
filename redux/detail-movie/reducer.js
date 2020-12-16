import * as types from './types'

const initialState = {
  detailLoading: null,
  detailMovies: {},
  detailError: null
}
export const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_DETAIL:
      return {
        ...state,
        ...{detailLoading: action.loading}
      }
    case types.DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        ...{detailMovies: action.data, detailError: null}
      }
    case types.DETAIL_MOVIE_FAILURE:
      return {
        ...state,
        ...{detailMovies: null, detailError: action.error}
      }
    default:
      return state
  }
}