import React from 'react'
import { List, Checkbox, Space, Col, Row } from 'antd';



export default function TodoStatus(props) {
    const { handleFooter } = props
    const changeStatus = (status) => {
        handleFooter(status)
    }
    return (
        <div className='footer_container'>
            <Row>
                <Col span={15} offset={1}>
                    <Space size={"middle"}>
                        <span onClick={changeStatus.bind(null, 'all')}>全部</span>
                        <span onClick={changeStatus.bind(null, 'finish')}>已完成</span>
                        <span onClick={changeStatus.bind(null, 'nofinish')}>未完成</span>
                    </Space>
                </Col>
                <Col span={4} offset={4}>
                    <span onClick={changeStatus.bind(null, 'clear')}>清除全部</span>
                </Col>
            </Row>

        </div>
    )
}