import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGird extends Component {
    state = {
        Layout: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 1, y: 0, w: 1, h: 1, maxH: 2 },
            { i: 'c', x: 4, y: 0, w: 1, h: 1, minH: 1, maxH: 2 }
        ]
    }

    changeLayout = (Layout) => {
        // console.log(Layout);  // 每次拖拽 或者 改变大小会触发改函数
    }

    onDrag = (layout, oldItem, newItem, placeholder, e, ele) => {
        // console.log(e,ele);
    }


    render() {
        const { Layout } = this.state

        var layouts = { lg: Layout, md: Layout }
        return (
            <div className='box'>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 1 }}
                    onLayoutChange={this.changeLayout} // 拖拽，改变大小触发
                    compactType='horizontal' //紧凑型
                    // margin={[30,30]}      // 每个元素之间margin距离
                    useCSSTransforms
                    onDrag={this.onDrag}
                >
                    <div className='panel' key="a">1</div>
                    <div className='panel' key="b">2</div>
                    <div className='panel' key="c">3</div>
                </ResponsiveGridLayout>
            </div>
        )
    }
}

export default MyFirstGird