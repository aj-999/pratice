import React, { Component } from 'react'
import echarts from 'echarts'

class EchartBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getCharts = () => {
        var myChart = echarts.init(document.getElementById('main1'))
        myChart.setOption({
            // backgroundColor: '#2c343c', // div背景颜色
            // // 视觉映射组件
            // visualMap: {
            //     show: false, 
            //     min: 80,
            //     max: 600,
            //     inRange: {
            //         colorLightness: [0, 1]
            //     }
            // },
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',  // vertical 垂直 horizontal 水平
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '40%',
                    data: [
                        { value: 235, name: '视频广告' },
                        { value: 274, name: '联盟广告' },
                        { value: 310, name: '邮件营销' },
                        { value: 335, name: '直接访问' },
                        { value: 450, name: '搜索引擎' }
                    ],
                    // roseType: 'angle',  // 南丁格尔图
                    // 标签名字
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'  // 字体颜色
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'  // 标签线条颜色
                            }
                        }
                    },
                    // color:['pink','blue','skyblue','plum','organge']
                    // itemStyle: {   // 图形样式
                    //     normal: {
                    //         // color: '#58bc58',  // 饼图每块的颜色
                    //         shadowBlur: 200,
                    //         shadowColor: 'rgba(0, 0, 0, 0.8)'
                    //     }
                    // }
                    emphasis:{ // 高亮的扇区和标签样式
                        itemStyle:{
                            shadowBlur:30,
                            shadowColor:'rgba(0,0,0,.5)'
                        }
                    }
                }
            ]
        })
    }

    componentDidMount() {
        this.getCharts()
    }

    render() {
        return (
            <div id='main1' style={{ width: '100%', height: 400 }}></div>
        )
    }
}

export default EchartBar