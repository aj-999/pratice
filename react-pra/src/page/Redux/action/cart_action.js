/* 
    action creators：封装一个用于生成action的函数
*/
export const CART_ADD = 'CART_ADD'
export const CART_DEL = 'CART_DEL'
export const CART_CHANGE_COUNT = 'CART_CHANGE_COUNT'


export function add(goods) {
    return {
        type: CART_ADD,
        goods: {
            ...goods,
            count: 1
        }
    }
}

export function del(id) {
    return {
        type: CART_DEL,
        goods: { id }
    }
}

export function changeCount(id, val) {
    return {
        type: CART_CHANGE_COUNT,
        goods: { id, count: val }
    }
}



export default {
    add,
    del,
    changeCount
}