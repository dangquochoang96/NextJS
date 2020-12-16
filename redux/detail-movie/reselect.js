import {createSelector} from 'reselect'

const detailMovieSelector = state => state.detail  

export const getLoadingDetail = createSelector(
    detailMovieSelector, item => item.detailLoading  
)
export const getDataDetail = createSelector(
    detailMovieSelector, item => item.detailMovies 
)