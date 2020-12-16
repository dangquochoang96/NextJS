import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as reselect from '../../redux/detail-movie/reselect'
import { getDataMovies } from '../../redux/detail-movie/action'
import { createStructuredSelector } from 'reselect'
import { Row, Col, Image, Skeleton } from 'antd'
import { useRouter } from 'next/router'

export default function DetailMovie() {
  const router = useRouter()
  const params = router.query.movie || []
  const id = params[1]

  const { loading, detailMovie } = useSelector(createStructuredSelector({
    loading: reselect.getLoadingDetail,
    detailMovie: reselect.geDataDetail
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataMovies(id))
  }, [id])
  console.log(detailMovie)
  
  return (
    <>
      <h1>Detail : </h1>
    </>
  )
}