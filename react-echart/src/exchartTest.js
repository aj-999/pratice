import React, { Component } from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class ExchartTest extends Component {
    getOption = () => {
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        }
        return option
    }
    render() {
        // 图表背景色
        // echarts.registerTheme('my_theme',{
        //     backgroundColor: 'skyblue' 
        // })

        return (
            <ReactEcharts 
            option={this.getOption()} 
            style={{ height: '500px', width: '60%' }} 
            theme='my_theme'
            />
        )
    }
}
export default ExchartTest

