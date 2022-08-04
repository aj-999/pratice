import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, Divider, Button, List, InputNumber } from 'antd'
import { bindActionCreators } from 'redux'
import cartAction from './action/cart_action'

class Cart extends Component {
    render() {
        const { cartlist, onDel, onChangeCount, del, changeCount, allprice } = this.props
        // console.log(cartlist);
        return (
            <div>
                <Divider orientation="left">这里是购物车</Divider>
                <List
                    size="middle"
                    bordered
                    dataSource={cartlist}
                    renderItem={(item, id) =>
                        <List.Item actions={[<span onClick={onDel.bind(null, item.id)}>删除</span>]}>
                            <>
                                <Checkbox />
                                <span>{item.title}</span>
                                <span>￥{item.price}</span>
                                <span> <InputNumber min={1} max={10} value={item.count} onChange={onChangeCount.bind(null, item.id)} /></span>
                            </>
                        </List.Item>}
                />
                <div>总数量：{cartlist.length}    总价格：￥{allprice}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartlist: state.cartReducer.goods,
        allprice: state.cartReducer.goods.reduce((prev, item) => prev += item.price * item.count, 0),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDel(id) {
            // dispatch({
            //     type: 'DEL',
            //     goods: { id }
            // })
            dispatch(cartAction.del(id))
        },
        onChangeCount(id, val) {
            // 拦截 先出发saga action 库存是否足够
            dispatch({
                type: 'CART_CHANGE_COUNT_ASYNC',
                goods: { id, count: val }
            })
            // dispatch(cartAction.changeCount(id, val))
        }
    }
    // return bindActionCreators(cartAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)