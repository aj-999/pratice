import React, { Component } from 'react'
import echarts from 'echarts'

class Custom extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getCharts = () => {
        var myChart = echarts.init(document.getElementById('custom'))
        myChart.setOption( {
            xAxis: {
                splitLine: { // 网格线
                    show: false,
                },
            },
            yAxis: {
                splitLine: { // 网格线
                    show: false,
                },
            },
            series: [{
                data: [[0,0],[10,10]],
                type: 'line',
                lineStyle: {
                    color: 'black',
                    width: 4,
                },
            },{
                data: [[0,2],[10,8]],
                type: 'line',
                lineStyle: {
                    color: 'skyblue',
                    width: 4,
                    type: 'dashed'
                },
            },{

                data: [[0,2],[10,9]],
                type: 'line',
                lineStyle: {
                    color: 'plum',
                    width: 4,
                },
            },
            {
                data: [[4,0],[4,10]],
                type: 'line',
                lineStyle: {
                    color: 'orange',
                    width: 4,
                    type: 'dashed'
                },
            },{
                data: [[5,0],[5,10]],
                type: 'line',
                lineStyle: {
                    color: 'blue',
                    width: 4,
                    type: 'dashed'
                },
            },{
                data: [[6,0],[6,10]],
                type: 'line',
                lineStyle: {
                    color: 'red',
                    width: 4,
                    // type: 'dashed'
                },
            },{
                data: [[7,0],[7,10]],
                type: 'line',
                lineStyle: {
                    color: 'plum',
                    width: 4,
                    // type: 'dashed'
                },
            },]
        })
    }

    componentDidMount() {
        this.getCharts()
    }

    render() {
        return (
                <div id='custom' style={{ width: '100%', height: 800 }}></div>
        )
    }
}

export default Custom