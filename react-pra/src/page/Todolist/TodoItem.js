import React, { useContext, useState } from 'react'
import { List, Checkbox } from 'antd';
import { MyContext } from './index'

export default function TodoItem(props) {
    const data = useContext(MyContext)
    const { dataDel, changeState } = props

    const del = (i) => {
        dataDel(i)
    }
    const onChange = (i) => {
        changeState(i)
    }
    return (
        <div>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item, index) =>
                    item.show ?
                        <List.Item actions={[<span onClick={del.bind(null, index)}>删除</span>]}>
                            <List.Item.Meta avatar={<Checkbox checked={item.done} onChange={onChange.bind(null, index)} />} title={<div className={item.done ? 'list_title' : ''}>{item.data}</div>} />
                        </List.Item> : ''}
            />


            {/* <MyContext.Consumer>
                {
                    (list) => {
                        console.log(list);
                        return (
                            list.map((item, index) => {
                                return <div key={index}>{item.data}</div>
                            })
                        )
                    }
                }
            </MyContext.Consumer> */}
        </div>
    )
}