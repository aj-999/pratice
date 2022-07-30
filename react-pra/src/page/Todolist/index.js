import React, { useEffect, useRef, useState } from 'react'
import { Space } from 'antd'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoStatus from './TodoStatus'
import './style.less'

export const MyContext = React.createContext({})

const data = [{ data: '123', done: false, show: true }, { data: 'i付款啦的', done: false, show: true }]

export default function TodoList() {
    let [list, changeDate] = useState(data)
    const faRef = useRef()

    // 添加数据
    const addList = (val) => {
        changeDate([{ data: val, done: false, show: true }, ...list])
    }

    // 删除
    const dataDel = (i) => {
        // 方案一
        // list.splice(i, 1)
        // changeDate([...list])

        // 方案2
        list = list.filter((item, index) => index != i)
        changeDate(list)
    }

    // 修改状态
    const changeState = (i) => {
        list = list.map((item, index) => {
            if (index == i) item.done = !item.done
            return item
        })
        changeDate(list)
    }

    const handleFooter = (status) => {
        if (status == "all") {
            list = list.map((item) => {
                item.show = true
                return item
            })
        } else if (status == "finish") {
            list = list.map((item) => {
                item.show = item.done ? true : false
                return item
            })
        } else if (status == "nofinish") {
            list = list.map((item) => {
                item.show = !item.done ? true : false
                return item
            })
        } else {
            list = []
        }
        changeDate(list)
    }


    return (
        <div className='container'>
            <MyContext.Provider value={list}>
                <Space style={{ display: 'flex' }} direction="vertical" size="middle">
                    <TodoInput addList={addList} />
                    <TodoItem changeState={changeState} dataDel={dataDel} />
                    <TodoStatus handleFooter={handleFooter} />
                </Space>
            </MyContext.Provider>





        </div>
    )
}