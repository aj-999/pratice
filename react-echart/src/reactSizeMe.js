import React,{Component} from 'react'
import sizeMe  from 'react-sizeme'

class ReactSize extends Component{
    state={
        width:300,
        height:300
    }
    render(){
        const { width, height } = this.props.size
        return (
            <div>
                My size is {width || -1}px x {height || -1}px
            </div>
        )
    }
}

export default sizeMe({ monitorHeight: true })(ReactSize)