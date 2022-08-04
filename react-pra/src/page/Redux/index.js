import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Space, Steps, Row } from 'antd'
import { bindActionCreators } from 'redux'
import TaoBao from './TaoBao'
import TianMao from './TianMao'
import Cart from './Cart'
import stepAction from './action/step_action'
import './style/style.less'



function ReducerText(props) {
    // 使用reducer获取state的数据
    const navigate = useNavigate()
    const goto = (path) => {
        navigate(path)
    }
    const { step, prev, next } = props


    return (
        <div className='redux_container'>
            {step == 0 &&
                <Space size="middle">
                    <Button onClick={goto.bind(null, 'tb')}>点击进入淘宝页面购买商品</Button>
                    <Button onClick={goto.bind(null, 'tm')}>点击进入天猫页面购买商品</Button>
                </Space>
            }


            <Steps style={{ marginTop: '20px' }} size="large" current={step} >
                <Steps.Step title="商品" />
                <Steps.Step title="购物车" />
                <Steps.Step title="结算" />
            </Steps>
            {
                step == 0 && <Routes>
                    <Route path='tm' element={<TianMao />} />
                    <Route path='tb' element={<TaoBao />} />
                </Routes>
            }
            {
                step == 1 && <Cart />
            }
            {
                step == 2 && '结算'
            }
            <Row justify="center" style={{ marginTop: '20px' }}>
                <Space size="large">
                    {step != 0 && <Button onClick={prev.bind(null, step)} size='large'>上一步</Button>}
                    {step != 2 && <Button onClick={next.bind(null, step)} size='large'>下一步</Button>}
                </Space>
            </Row>



        </div>
    )
}
export default connect((state) => {
    return {
        step: state.StepReducer.step
    }
}, (dispatch) => {
    return {
        next(index) {
            index++
            if (index == 3) index = 2
            dispatch(stepAction.changeCurrent(index))
        },
        prev(index) {
            index--
            if (index == -1) index = 0
            dispatch(stepAction.changeCurrent(index))
        }
    }
})(ReducerText)