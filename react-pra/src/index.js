import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css';
// 1.引入context 使用Provider组件
import { Provider } from 'react-redux'
// 2.引入store 
import store from './page/Redux/store/store'

const root = createRoot(document.getElementById('app'))

root.render(
    <HashRouter>
        {/* 接受redux的store作为props，通过context对象传递给子孙组件上的connect */}
        <Provider store={store}>
            <App />,
        </Provider>
    </HashRouter>
)
