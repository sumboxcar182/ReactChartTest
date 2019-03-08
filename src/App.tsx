import * as React from 'react';
import './App.css';
import ReactEchartsCore, { ObjectMap } from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/sankey';
import { getData } from './Data';

class App extends React.Component {

  getOptions = (): ObjectMap => {
    const data = getData();
    const options = {
      series: [ {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        focusNodeAdjacency: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#aaa'
          }
        },
        lineStyle: {
          normal: {
            curveness: 0.5
          }
        }
      }
      ]
    }
    return options;
  }

  render() {
    return (
      <div className="App">
          <ReactEchartsCore
            option={this.getOptions()}
            echarts={echarts}
          />
      </div>
    );
  }
}

export default App;
