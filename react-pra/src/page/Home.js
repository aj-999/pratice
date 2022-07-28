import React from 'react';
import { Button } from 'antd';
import CustomMenu from '../components/CustomMenu'

function Home() {
    return (
        <div className='home_container'>
            <Button>按钮</Button>
            <CustomMenu />
        </div>
    )
}

export default Home

