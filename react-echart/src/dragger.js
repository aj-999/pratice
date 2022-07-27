import React,{Component} from 'react'
import Dragger from 'react-dragger-r'

class DraggerDemo extends Component {
    render() {
        return (
            <div>
                <Dragger style={{ left: 50 }}>
                    <div className='panel'>普通的拖拽组件</div>
                </Dragger>
            </div>
        )
    }
}

export default DraggerDemo
