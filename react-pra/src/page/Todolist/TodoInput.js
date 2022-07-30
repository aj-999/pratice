import React, { useContext, useRef, useState } from 'react'
import { Input } from 'antd';

export default function TodoInput(props) {
    let [val, setVal] = useState('')

    const handleVal = (e) => {
        setVal(e.target.value)
    }
    const onEnter = () => {
        props.addList(val)
        setVal('')
    }

    return (
        <div className='header'>
            <Input size='large' value={val} onPressEnter={onEnter} onChange={handleVal} placeholder="Basic usage" />
        </div>
    )
}