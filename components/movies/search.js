import { Row, Col, Input } from 'antd'
import { searchMovies } from '../../redux/movies/action'
import { useDispatch } from 'react-redux'

const { Search } = Input
export default function SearchMovie() {
    const dispatch = useDispatch()
    const searchFilm = (name) => {
        dispatch(searchMovies(name))
    }
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Search placeholder="name movies" onSearch={val => searchFilm(val)} enterButton />
                </Col>
            </Row>
        </>
    )
}