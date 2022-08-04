import { CART_ADD, CART_DEL, CART_CHANGE_COUNT } from '../action/cart_action'
const initState = {
    goods: [{
        id: 4,
        title: '淘宝商品4',
        price: 221,
        count: 1
    }],
    allPrice: 0
}
export default function cartReducer(state = initState, action) {
    const { type, goods } = action
    switch (type) {
        case CART_ADD:
            let index = state.goods.findIndex(ele => ele.id === goods.id)
            if (index != -1) {
                state.goods[index].count += 1
            } else {
                state.goods.unshift(goods)
            }
            return { ...state }
        case CART_DEL:
            console.log('222', goods);
            return { ...state, goods: state.goods.filter((item) => item.id != goods.id) }
        case CART_CHANGE_COUNT:
            return {
                ...state,
                goods: state.goods.map(item => {
                    if (item.id == goods.id) {
                        item.count = goods.count
                    }
                    return item
                })
            }
        default:
            return state
            break;
    }

}
