import React from 'react';
// import ExchartTest from './exchartTest'
import DragEchartBar from './dragEchartBar'
import EchartPie from './echartPie'
import EchartScatter from './echartScatter'
import EchartCustom from './echartCustom'
// import DraggerDemo from './dragger'
import MyFirstGird from './gridLayout'
// import ReactSize from './reactSizeMe'
import Custom from './custom'

import './index.css'


function App() {
  return (
    <div className="App">
      <Custom />
      {/* <ExchartTest /> */}
      <DragEchartBar />
      <EchartPie />
      <EchartScatter />
      <EchartCustom />
      {/* <DraggerDemo /> */}
      <MyFirstGird />
      {/* <ReactSize /> */}
    </div>
  );
}

export default App;
