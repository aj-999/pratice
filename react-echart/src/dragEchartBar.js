import React, { Component } from 'react'
import echarts from 'echarts'


class EchartBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getCharts = () => {
        var myChart = echarts.init(document.getElementById('main'))
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            toolbox: {
                feature: {
                    // dataView: {show: true, readOnly: false},  // 数据试图
                    magicType: {show: true, type: ['line', 'bar']},  // 动态类型切换
                    restore: {show: true},  // 配置项还原
                    saveAsImage: {show: true}   // 保存图片
                }
            },
            area:{},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart.resize()
    }

    componentDidMount() {
        this.getCharts()
        let oBox = this.oBox.querySelector('.box')
        let oPanel = this.oBox.querySelector('.panel')
        let oDrag = this.oBox.querySelector('.drag')
        let oMoveDiv = this.oBox.querySelector('.moveDiv')
        

        // 大盒子距窗口的left top
        let boxLeft = oBox.offsetLeft
        let boxTop = oBox.offsetTop
        // 大盒子自身的宽和高
        let moveRangeW = oBox.clientWidth - oPanel.offsetWidth + boxLeft
        let moveRangeH = oBox.clientHeight - oPanel.offsetHeight + boxTop

        //  当小div点击时 大div移动
        oDrag.onmousedown = (e) => {
            let dragX = e.clientX;  // 鼠标按下的X值
            let dragY = e.clientY;  // 鼠标按下Y的值
            let panelW = oPanel.offsetWidth;
            let panelH = oPanel.offsetHeight;
            
            document.onmousemove = (ev) => {
                // 移动的距离=拖动时距屏幕的距离-拖动的小块鼠标按下的x值
                var moveW = ev.clientX - dragX + panelW;
                var moveH = ev.clientY - dragY + panelH;
                if (moveW < 200) moveW = 200
                if (moveW > oBox.clientWidth) moveW = oBox.clientWidth
                if (moveH < 200) moveH = 200
                if (moveH > oBox.clientHeight) moveH = oBox.clientHeight
                oPanel.style.width = moveW + 'px'
                oPanel.style.height = moveH + 'px'
                this.getCharts()
               
                return false
            }
            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }
            return false
        }

        oMoveDiv.onmousedown = (e) => {
            let downX = e.clientX - oPanel.offsetLeft
            let downY = e.clientY - oPanel.offsetTop
            document.onmousemove = (ev) => {
                let moveX = ev.clientX - downX
                let moveY = ev.clientY - downY
                if (moveX >= moveRangeW) moveX = moveRangeW
                if (moveX <= boxLeft) moveX = boxLeft
                if (moveY >= moveRangeH) moveY = moveRangeH
                if (moveY <= boxTop) moveY = boxTop
                oPanel.style.left = moveX + 'px'
                oPanel.style.top = moveY + 'px'
                return false
            }
            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }
            return false
        }


    }



   
    
    render() {
        return (
            <div ref={(el) => this.oBox = el}>
                <div className='box' >
                    <div className='panel'>
                        <div className="moveDiv" ></div>
                        <div className='drag' onMouseDown={this.onDragMouseDown} ></div>
                        <div id='main' style={{ width: '100%', height: '100%' }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EchartBar