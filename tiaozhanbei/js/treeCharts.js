const myChartOne = echarts.init(document.getElementById('chart--one'), 'infographic');
const myChartTwo = echarts.init(document.getElementById('chart--two'), 'infographic');
const myChartThree = echarts.init(document.getElementById('chart--three'), 'infographic');
const myChartFour = echarts.init(document.getElementById('chart--four'), 'infographic');

// chart 1
let optionOne = {
  tooltip : {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'铁含量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[120, 132, 101, 134]
      },
      {
          name:'铝含量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[220, 182, 191, 234]
      },
      {
          name:'硅含量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[150, 232, 201, 154]
      },
      {
          name:'铜含量',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[320, 332, 301, 334]
      },
      {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {normal: {}},
      }
  ]
};

// chart 2
let optionTwo = {
  tooltip: {
      trigger: 'axis'
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四']
  },
  yAxis: {
      type: 'value'
  },
  series: [
      {
          name:'铁含量',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134]
      },
      {
          name:'铝含量',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234]
      },
      {
          name:'硅含量',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154]
      },
      {
          name:'铜含量',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334]
      }
  ]
};

// chart 3
let dataThree = [
  [0.067732, 3.176513],
  [0.42781, 3.816464],
  [0.995731, 4.550095],
  [0.738336, 4.256571],
  [0.981083, 4.560815],
  [0.526171, 3.929515],
  [0.378887, 3.52617],
  [0.033859, 3.156393],
  [0.132791, 3.110301],
  [0.138306, 3.149813],
  [0.247809, 3.476346],
  [0.64827, 4.119688],
  [0.731209, 4.282233],
  [0.236833, 3.486582],
  [0.969788, 4.655492],
  [0.607492, 3.965162],
  [0.358622, 3.5149],
  [0.147846, 3.125947]
];

let myRegression = ecStat.regression('linear', dataThree);

myRegression.points.sort(function(a, b) {
    return a[0] - b[0];
});

let optionThree = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross'
      }
  },
  xAxis: {
      type: 'value',
      splitLine: {
          lineStyle: {
              type: 'dashed'
          }
      },
  },
  yAxis: {
      type: 'value',
      min: 1.5,
      splitLine: {
          lineStyle: {
              type: 'dashed'
          }
      },
  },
  series: [{
      name: 'scatter',
      type: 'scatter',
      label: {
          emphasis: {
              show: true,
              position: 'left',
              textStyle: {
                  color: 'blue',
                  fontSize: 16
              }
          }
      },
      data: dataThree
  }, {
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: myRegression.points,
      markPoint: {
          itemStyle: {
              normal: {
                  color: 'transparent'
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'left',
                  formatter: myRegression.expression,
                  textStyle: {
                      color: '#333',
                      fontSize: 14
                  }
              }
          },
          data: [{
              coord: myRegression.points[myRegression.points.length - 1]
          }]
      }
  }]
};

// chart 4
let optionFour = {
  legend: {
      textStyle: {
          color: '#F1F1F3'
      }
  },
  tooltip: {},
  dataset: {
      source: [
          ['product', '上午', '下午', '晚上'],
          ['1', 43.3, 79.2, 75.2],
          ['2', 73.1, 73.4, 55.1],
          ['3', 66.4, 65.2, 72.5],
          ['4', 72.4, 53.9, 39.1]
      ]
  },
  grid: {
      left:30,
      top: 30,
      bottom: 30
  },
  xAxis: {type: 'category',
      axisLine: {
          lineStyle: {
              color: '#F1F1F3'
          }
      }},
  yAxis: {
      axisLine: {
          lineStyle: {
              color: '#F1F1F3'
          }
      }
  },
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
};
