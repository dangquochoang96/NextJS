import { Row, Col, Skeleton } from 'antd'
import { useState, useEffect } from 'react'

export default function reCovidApp({ result }) {
    console.log(result)
    const [loading, setLoading] = useState(false)
    const [virus, setDataVirus] = useState({})

    useEffect(() => {
        const getDataCorona = async () => {
            try {
                await setLoading(true)
                const response = await fetch(`https://api.covid19api.com/summary`)
                const result = await response.json()
                await setDataVirus(result)
                await setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getDataCorona()
    }, [])

    if (loading && !virus.hasOwnProperty('Global')) {
        return (<Skeleton active />)
    }
    console.log(virus)
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1>Thong tin Covid</h1>
                    <Row>
                        <Col span={8}>
                            <p>So ca moi nhiem: {virus['Global'] !== undefined ? virus['Global']['NewConfirmed'].toLocaleString() : null}</p>
                            <p>Tong so ca bi nhiem </p>
                        </Col>
                        <Col span={8}>
                            <p>So ca moi chet </p>
                            <p>Tong so ca bi chet </p>
                        </Col>
                        <Col span={8}>
                            <p>So ca moi khoi </p>
                            <p>Tong so ca khoi </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}