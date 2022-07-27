import React, { Component } from 'react'
import echarts from 'echarts'

class EchartScatter extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getCharts = () => {
        var myChart = echarts.init(document.getElementById('mainScatter'))
        myChart.setOption({
            // toolbox: {
            //     feature: {
            //         // dataView: {show: true, readOnly: false},  // 数据试图
            //         magicType: {show: true, type: ['line', 'bar']},  // 动态类型切换
            //         restore: {show: true},  // 配置项还原
            //         saveAsImage: {show: true}   // 保存图片
            //     }
            // },
            xAxis: {
                axisLabel: {  // 修改刻度字体样式
                    show: true,
                    color: '#333'
                },
                axisTick: {
                    show: false // 是否显示坐标轴刻度
                },
                splitLine: { // 网格线
                    show: false,
                    lineStyle: {
                        type: 'dashed',  // 虚线
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'transparent'
                    }
                }
            },
            yAxis: {
                axisLabel: {  // 修改刻度样式
                    show: true,
                    color: '#333'
                },
                splitLine: { // 网格线
                    show: true,
                    lineStyle: {
                        type: 'dashed',  // 虚线
                        //    color:'plum'  
                    }
                },
                axisTick: {
                    show: false // 是否显示坐标轴刻度
                },
                axisLine: {
                    lineStyle: { //坐标轴线条颜色
                        color: 'transparent'  
                    }
                },
                // data: [2, 4, 6, 8, 10, 12, 14]
            },
            series: [{
                symbolSize: 20, // 标记大小 可设置成数组[20,10]
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
        })
    }

    componentDidMount() {
        this.getCharts()
    }

    render() {
        return (
            <div className='box'>
                <div id='mainScatter' style={{ width: '100%', height: 400 }}></div>
            </div>
        )
    }
}

export default EchartScatter