import React, { Component } from 'react'
import echarts from 'echarts'
var trangle1=[[4,4],[4,22/5],[5,5]]
var trangle2=[[6,6],[6,28/5],[5,5]]
var trangle3=[[6,6],[6,5],[4,4]]

class Custom extends Component {
    constructor() {
        super()
        this.state = {
            area:0
        }
    }

    getTrangelArea(data){
       data.forEach(item => {
            if(item[0]===item[1]){
                let X1 = data[0][0]
                let Y1 = data[0][1]
                let X2 = data[1][0]
                let Y2 = data[1][1]
                let X3 = data[2][0]
                let Y3 = data[2][1]
                // let long =((Y2-Y1).toFixed(2))*1
                // let high=((X3-X1).toFixed(2))*1
                let area = (Math.abs((Y2-Y1)*(X3-X1))/2).toFixed(2)*1
                this.setState({area})
                return area
            }
       });
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
            legend:{
                data:['trangle1','trangle2','trangle3']
            },
            tooltip:{
                formatter:(params,ticket)=>{
                    if(params.seriesName === 'trangle1'){
                        this.getTrangelArea(trangle1)
                        return '面积：'+this.state.area
                    }else if(params.seriesName === 'trangle2'){
                        this.getTrangelArea(trangle2)
                        return '面积：'+this.state.area
                    }else if(params.seriesName === 'trangle3'){
                        this.getTrangelArea(trangle3)
                        return '面积：'+this.state.area
                    }
                }
            },
            color:['pink','skyblue','rgba(204,255,204,.6)'],
            series: [{
                data: [[0,0],[10,10]],
                type: 'line',
                lineStyle: {
                    color: 'black',
                    width: 4,
                },
            },
            {
                data: [[0,2],[10,7]],
                type: 'line',
                lineStyle: {
                    color: 'skyblue',
                    width: 4,
                    type: 'dashed'
                },
            },
            {
                data: [[0,2],[10,8]],
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
            },
            // {
            //     data: [[5,0],[5,10]],
            //     type: 'line',
            //     lineStyle: {
            //         color: 'blue',
            //         width: 4,
            //         type: 'dashed'
            //     },
            // },
            {
                data: [[5,0],[5,10]],
                type: 'line',
                lineStyle: {
                    color: 'red',
                    width: 4,
                },
            },
            {
                data: [[6,0],[6,10]],
                type: 'line',
                lineStyle: {
                    color: 'purple',
                    width: 4,
                },
            },
            {
                type: 'custom',
                name: 'trangle1',
                renderItem: (params, api) => this.renderItem(params, api, trangle1),
                data: trangle1
            },{
                type: 'custom',
                name: 'trangle2',
                renderItem: (params, api) => this.renderItem(params, api, trangle2),
                data: trangle2
            },{
                type: 'custom',
                name: 'trangle3',
                renderItem: (params, api) => this.renderItem(params, api, trangle3),
                data: trangle3
            },
        ]
        })
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