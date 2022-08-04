import React, { Component } from 'react'
import { Button, Row, Col, Divider } from 'antd';

class TianMao extends Component {

    render() {
        return (
            <div className='wrapper'>
                <Divider orientation="left">这里天猫商品栏</Divider>
                <Row gutter={10}>
                    <Col span={10}>
                        <div className='item'>
                            <h3>天猫商品1</h3>
                            <h4>￥888</h4>
                            <Button style={{ marginTop: '10px' }}>添加购物车</Button>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className='item'>
                            <h3>天猫商品2</h3>
                            <h4>￥222</h4>
                            <Button style={{ marginTop: '10px' }}>添加购物车</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TianMao