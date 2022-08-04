import React, { Component } from 'react'
import { Button, Row, Col, Divider, Space } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import cartAction, { CART_ADD } from './action/cart_action'

class TaoBao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: [
                {
                    id: 1,
                    title: '淘宝商品1',
                    price: 999,
                },
                {
                    id: 2,
                    title: '淘宝商品2',
                    price: 666,
                },
                {
                    id: 3,
                    title: '淘宝商品2',
                    price: 221,
                }
            ]
        }

    }


    render() {
        const { addClick, add } = this.props
        const { goodsList } = this.state
        // console.log(this.props);
        return (
            <div className='wrapper'>
                <Divider orientation="left">这里淘宝商品栏</Divider>
                <Row gutter={0, 10}>
                    {
                        goodsList.map(item => {
                            return (
                                <Col key={item.id} span={10} style={{ marginTop: '10px' }}>
                                    <div className='item'>
                                        <h3>{item.title}</h3>
                                        <h4>￥{item.price}</h4>
                                        <Button onClick={add.bind(null, item)}>添加购物车</Button>
                                        {/* <Button onClick={addClick.bind(null, item)}>添加购物车</Button> */}
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div >
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addClick(goods) {
//             dispatch({
//                 type: 'ADD',
//                 goods: {
//                     ...goods,
//                     count: 1
//                 }
//             })

//         }
//     }
// }


export default connect(null, (dispatch) => {
    // return {
    //     addClick(goods) {
    //         dispatch(cartAction.add(goods))
    //     },
    // }

    return bindActionCreators(cartAction, dispatch)
})(TaoBao)