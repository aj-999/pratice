import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import './index.less'


function App() {
    let navigate = useNavigate()


    const goto = (path) => {
        // navigate('/about', { state: { test: 'aa' } })
        navigate(path)
    }
    return (

        <div>
            <span className='go_btn' onClick={goto.bind(null, '/home')}>home</span>
            <span className='go_btn' onClick={goto.bind(null, '/about/2')}>about</span>
            <Routes>
                {/* 重定向 */}
                <Route path='/' element={<Navigate to='/home' replace={true} />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/about/:id' element={<About />} />
                <Route path='/not' element={<NotFound />} />
                {/* 404 */}
                <Route path='*' element={<Navigate to='/not' replace={true} />} />
            </Routes>
        </div >
    )
}
export default App