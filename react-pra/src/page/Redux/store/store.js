import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cartReducer from '../reducer/cart_Reducer'
import StepReducer from '../reducer/step_Reducer'
// 引入自定义saga文件
import rootsaga from '../saga/rootsaga'


// reducer 模块化
const reducer = combineReducers({ cartReducer, StepReducer })

// 1.创建saga
const mysaga = createSagaMiddleware()

// 创建store  2.绑定saga中间件
const store = createStore(reducer, applyMiddleware(mysaga))

// 3.运行saga配置
mysaga.run(rootsaga)

export default store
