// 配置redux-saga文件
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import cartAction from '../action/cart_action'
import { message } from 'antd'

function* changeCou({ goods: { id, count } }) {
    // 发送ajax 满足触发reducer action 不满足提示库存不足
    if (count <= 5) {
        // 可以添加
        yield put(cartAction.changeCount(id, count))
    } else {
        message.warn('库存不足');
    }
}

function* init() {
    // 每次点击都会触发
    yield takeEvery('CART_CHANGE_COUNT_ASYNC', changeCou)
    // 多次点击只会触发最后一次
    // yield takeLatest('CART_CHANGE_COUNT_ASYNC', changeCou)
}

export default init