import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import './custom-menu.less'


export default function CustomMenu(props) {
    const { items } = props
    const [current, setCurrent] = useState(items[0].key)
    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        setCurrent(location.pathname);
    }, [location.pathname])

    const onClick = (e) => {
        // 路由跳转
        navigate(e.key)
        setCurrent(e.key);
    }

    return (
        <div>
            <Row>
                <Col span={20}>
                    <Menu onClick={onClick}
                        // style={{ width: 256 }}
                        selectedKeys={current}
                        theme="dark"
                        mode="horizontal "
                        items={items} />
                </Col>
                <Col span={4}>
                    <div className='layout-rig'>
                        <span>登录</span>
                        <span>注册</span>
                    </div>

                </Col>
            </Row>
        </div>
    )
}