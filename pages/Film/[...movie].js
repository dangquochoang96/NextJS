import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as reselect from '../../redux/detail-movie/reselect'
import { getDataMovies } from '../../redux/detail-movie/action'
import { createStructuredSelector } from 'reselect'
import { Row, Col, Image, Skeleton } from 'antd'
import { useRouter } from 'next/router'

export default function DetailMovie() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>Detail: </h1>
        </>
    )
}