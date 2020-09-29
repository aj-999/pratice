import React, { Component } from 'react'
import echarts from 'echarts'
var data = [[0, 85], [85, 85], [85, 0], [0, 0]]
var data1 = [[0, 120], [120, 120], [85, 85], [0, 85]]
var data2 = [[85, 85], [120, 120], [120, 0], [85, 0]]



class EchartCustom extends Component {
    constructor() {
        super()
        this.state = {}
    }
    renderItem = (params, api, data) => {
        if (params.context.rendered) {
            return;
        }
        params.context.rendered = true;

        var points = [];
        for (var i = 0; i < data.length; i++) {
            points.push(api.coord(data[i]));
        }
        var color = api.visual('color');
        return {
            type: 'polygon',
            shape: {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            },
            style: api.style({
                fill: [color],
                stroke: color
            })
        }
    }



    getCharts = () => {
        var myChart = echarts.init(document.getElementById('main-custom'))
        myChart.setOption({
            legend: {
                data: ["区域一", "区域二", "区域三"]
            },
            tooltip: {
                // trigger: 'axis',
                formatter: (params, ticket) => {
                    if (params.componentIndex === 0) {
                        
                        return '区域一'
                    } else if (params.componentIndex === 1) {
                        return '区域二'
                    } else if(params.componentIndex === 2){
                        return '区域三'
                    }
                    console.log(params, ticket); 
                }
            },
            axisLabel: {  // 修改刻度字体样式
                show: true,
                color: '#58bc58'
            },
           
            xAxis: {
                axisLine: {
                    lineStyle: { //坐标轴线条颜色
                        color: '#aaa'
                    }
                },
                splitLine: { // 网格线
                    show: false,
                    // lineStyle: {
                    //     type: 'dashed',  // 虚线
                    //     //    color:'plum'  
                    // }
                },
            },
            yAxis: {
                axisLine: {
                    lineStyle: { //坐标轴线条颜色
                        color: '#aaa'
                    }
                },
                splitLine: { // 网格线
                    show: false,
                    // lineStyle: {
                    //     type: 'dashed',  // 虚线
                    //     //    color:'plum'  
                    // }
                },
            },
            emphasis: { // 高亮区域和标签样式
                itemStyle: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(0,0,0,.5)'
                }
            },
            color: ['skyblue', 'cornflowerblue  ', 'plum'],

            series: [
                {
                    type: 'custom',
                    name: '区域一',
                    renderItem: (params, api) => this.renderItem(params, api, data1),
                    data: data1
                }, {
                    type: 'custom',
                    name: '区域二',
                    renderItem: (params, api) => this.renderItem(params, api, data),
                    data: data
                },
                {
                    type: 'custom',
                    name: '区域三',
                    renderItem: (params, api) => this.renderItem(params, api, data2),
                    data: data2
                }]
        });

        myChart.on('click', function (params) {
            console.log(params);
            if (params.seriesName === '区域二') {
                window.location.href = 'https://www.baidu.com/'
            } else if (params.seriesName === '区域一') {
                console.log('区域一');
            } else if (params.seriesName === '区域三') {
                console.log('区域三');
            }
        });
    }

    componentDidMount() {
        this.getCharts()
    }




    render() {
        return (
            <div id='main-custom' style={{ width: '50%', height: 600 }}></div>
        )
    }
}

export default EchartCustom