import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom'
import CustomMenu from './components/CustomMenu'
import About from './page/About'
import TodoList from './page/Todolist';
import ReducerText from './page/Redux';
import NotFound from './page/NotFound'
import './index.less'

const items = [
    { label: 'Todolist', key: '/todolist' }, // 菜单项务必填写 key
    { label: 'redux', key: '/redux' },
    {
        label: 'about',
        key: '/about',
        // children: [{ label: '子菜单项', key: 'sub1' }],
    },
];

const route = [
    { path: '/todolist', element: <TodoList /> },
    { path: '/redux/*', element: <ReducerText /> },
    { path: '/about', element: <About /> },
    { path: '/not', element: <NotFound /> },
]

function App() {
    const location = useLocation()
    let [flag, isExit] = useState(true)

    useEffect(() => {
        if (location.pathname == '/not') isExit(flag = false)
        else isExit(flag = true)
    }, [location.pathname])

    return (
        <div>
            {flag && <CustomMenu items={items} />}
            <Routes>
                {/* 重定向 */}
                <Route path='/' element={<Navigate to='/todolist' replace={true} />} />
                {route.map(item => {
                    return (<Route exact path={item.path} key={item.path} element={item.element} />)
                })}
                {/* 404 */}
                <Route path='*' element={<Navigate to='/not' replace={true} />} />
            </Routes>
        </div >
    )
}
export default App