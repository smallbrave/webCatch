   var myChart1 = echarts.init(document.getElementById('chart-1'));
   var myChart2 = echarts.init(document.getElementById('chart-2'));
   var myChart3 = echarts.init(document.getElementById('chart-3'));
   var myChart4 = echarts.init(document.getElementById('chart-4'));
    var myChartlt = echarts.init(document.getElementById("crc-lt-chart"));
    var myChartlb = echarts.init(document.getElementById("crc-lb-chart"));
    var myChartrt = echarts.init(document.getElementById("crc-rt-chart"));
    var myChartrb = echarts.init(document.getElementById("crc-rb-chart"));
    var myCharts1 = echarts.init(document.getElementById("left"));
    var myCharts2 = echarts.init(document.getElementById("right"));
option1 = {
  tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid:{
                    x:10,
                    y:1,
                    x2:10,
                    y2:1,
                    borderWidth:1
                },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
       axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#485878',
                       width:'2'
                   }
               },
        splitLine:{
              show: true,
              interval: 0,
            },      
    },
    yAxis: {
        type: 'value',
          axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#465777',
                       width:'2',    
                   }
               },axisLabel: {
                show:false,
                   textStyle: {
                       color: '#ccc',
                       fontSize:8,
                   }
               },

    },

    series: [{
        data: [1, 9, 1, 3, 7, 1, 2],
        type: 'line',
        color:'#726f6d',
    },{
        data: [1, 3, 1, 9, 1, 6, 9],
        type: 'line',
        color:'#e97d76',
    }]
};
    option2 = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
        grid: {
                left: '10',
                right: '10',
                bottom: '1',
                top:'1',
                containLabel: true
            },

    xAxis: {
        type: 'category',
        data: ['1','2','3','4','5','6','7','8','9','10'],
        axisLine:{
          lineStyle:{
             width: '1',
             color: '#155484',
          }

        },
        axisLabel:{
          show: false,
        },       
           splitLine:{
            show: true,
            interval: 0,
           }    
    },
    yAxis: {
        type: 'value',
          axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#606c7d',
                       width:'2'
                   }
               },axisLabel: {
                show:false,
                   textStyle: {
                       color: '#ccc',
                       fontSize:8,
                   }
               },
               splitLine:{
                show: false,
                interval: 0,
               }
    },

    series: [{
        data: [0,1,2,3,4,6,4,8,7,1],
        type: 'line',
        color:'#90c858',
         symbol: 'none',
    },{
        data: [0,-1,-2,-3,-4,-6,-4,5,-1,4],
        type: 'line',
        color:'#1e81c0',
         symbol: 'none',
    }]
};
option3 = {
  tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
         grid:{
                    x:10,
                    y:0,
                    x2:10,
                    y2:0,
                    borderWidth:1
                },
    // toolbox: {
    //     show : false,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            show:false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
        }

    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show:false,
                   textStyle: {
                       color: '#ccc',
                       fontSize:8,
                   }
               },
           splitLine:{
            show: false,
           }
        },
      
    ],
    series : [
        {
            name:'成交',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 12, 21, 54, 260, 830, 710],
            symbol: 'none',
        },
        {
            name:'预购',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 182, 434, 791, 390, 30, 10],
            symbol: 'none',
        },
        {
            name:'意向',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[1320, 1132, 601, 234, 120, 90, 20],
            symbol: 'none',
        }
    ]
};
option4 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
     grid:{
                    x:10,
                    y:4,
                    x2:10,
                    y2:2,
                    borderWidth:1
                },
    // toolbox: {
    //     show : false,
    //     feature : {
    //         mark : {show: false},
    //         dataView : {show: true, readOnly: false},
    //         magicType: {show: true, type:'line'},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
   
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月'],
         axisLine:{
                 lineStyle: {
                       type: 'solid',
                       color:'#8085a1',
                       width:'2',
                       height:'100%',
                   }
        },
            splitLine:{
              show: true,
              interval: 0,
            }        
     }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                 lineStyle: {
                       type: 'solid',
                       color:'#8085a1',
                       width:'2',
                       height:'100%',
                   }
              
            },
            axisLabel : {
                show:false,
                formatter: '{value}'
            },
            splitLine:{
              show: 'true',
              interval: 0,
            }
        },
        {
            type : 'value',
            axisLabel : {
                show:false,
                formatter: 'value'
            }, axisLine:{
                 lineStyle: {
                       type: 'solid',
                       color:'#5c6475',
                       width:'2',
                       height:'100%',
                   }
               }
        }
    ],
    series : [

        {
            name:'蒸发量',
            type:'line',
            data:[1,4,7,9,7,5,3],
            smooth: true,
            symbol: 'none',
            lineStyle:{
              color:'#1d93bc',
            }
        },
        {
            name:'降水量',
           type:'line',
            data:[0,5,7,3,1],
            smooth: true,
            symbol: 'none',
            lineStyle:{
              color: '#6a4748',
            }
        },       
      {
            name:'降雨量',
           type:'line',
            data:[0,0,5,7,5,2],
            smooth: true,
            symbol: 'none',
            lineStyle:{
              color: '#94a533',
            }
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2,4,6,3,1],
            smooth: true,
            symbol: 'none',
            lineStyle:{
              color: '#b84e47',
            }
        }
    ]
};
                    
                    
                                    
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);


    // 初始界面的四个图表
    
 option5 = {
 grid:{
                    x:'10%',
                    y:'20%',
                    x2:'10%',
                    y2:'10%',
                    borderWidth:1
                },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
  // legend: {
  //       data:['1','2','3']
  //   },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
         axisLabel : {
                show:false,
                formatter: '{value}'
            },
         axisLine:{
             lineStyle:{
              color: '#fff',
             }
         }   
    },
    yAxis: {
        type: 'value',
        splitLine:{
          show: true,
         lineStyle:{            
                type: 'dashed',
            },
        },
         axisLabel : {
                show:false,
                formatter: '{value}'
            },
               axisLine:{
             lineStyle:{
              color: '#fff',
             }
         }   

    },
    series: [{
        name:'1',
        data: [220, 532, 801, 434, 790, 1030, 620],
        type: 'line',
        symbol: 'none',
        smooth: true,
        lineStyle:{
          color: '#f6b638',
        }
    },{
        name:'2',
        data: [520, 832, 501, 734, 490, 830, 320],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle:{
          color: '#ee2f51',
        }
    },{
        name:'3',
        data: [320, 632, 501, 934, 590, 430, 1020],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle:{
          color: '#38abd3',
        }
    }
    ]
};
option6 = {
  tooltip:{
  trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
  },
    grid:{
        x:'10%',
        y:'20%',
        x2:'10%',
        y2:'10%',
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7','8','9','10'],
        axisLabel:{
            show:false,
        },
        axisLine:{
             lineStyle:{
              color: '#293366',
             }
          },
          splitLine:{
            show: true,
            interval: 0,
            lineStyle:{
              color: "#293366",
            }
          }  
    },
    yAxis: {
        type: 'value',
        show: false,
        axisLabel:{
            show:false,
        },
        axisLine:{
             lineStyle:{
              color: '#fff',
             }
          },
          splitLine:{
            show: false,
          }
    },
    series: [{
        data: [1, 9, 8, 1, 6, 8, 4,6,7,2],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle:{
          color: "#083877",
        }
    },{
        data: [1, 4, 6, 2, 5, 4, 7,4,3,8],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle:{
          color: "#082877",
        }
    },{
        data: [1, 2, 3, 4, 5, 6, 7,8,2,5],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle:{
          color: "#0d1066",
        }
    }]
};
option7 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        x:'20%',
        y:'20%',
        x2:'10%',
        y2:'10%',      
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel:{
              show:false,
            },
         axisLine:{
             lineStyle:{
              color: '#fff',
             }
          }
            
        }
    ],
    yAxis : [
        {
            type : 'value',
             splitLine:{show: false},//去除网格线
            axisLabel:{
                show:true,
                fontSize: 6,
            },
          axisLine:{
             lineStyle:{
              color: '#fff',
             }
          }
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {
              color: {
                 type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#f49a2c' // 0% 处的颜色
              }, {
                  offset: 1, color: '#fd5b5e' // 100% 处的颜色
              }],
              global: false // 缺省为 false
              },
            },
            data:[12, 132, 101, 134, 90, 230, 0],
            smooth:true,
                    symbol: 'none',
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {
              color: {
                 type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#2f849f' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5d889e' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
              },
            },
            data:[20, 182, 191, 234, 290, 230, 0],
            smooth:true,
            symbol: 'none',
            
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {
              color: {
                type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#619f8d' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#b5ae56' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
              },
            },
            data:[10, 232, 201, 154, 390, 30, 10],
            smooth:true,
            symbol: 'none',
            
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {},
              color:{
                type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#787e95' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#b5ae56' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
              },
            },
            data:[0, 332, 301, 334, 390, 230, 120],
            smooth:true,
            symbol: 'none',
            
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            areaStyle: {normal: {},
              color: '#b7ae54',
           },
            data:[20, 432, 901, 934, 390, 130, 20],
            smooth:true,
            symbol: 'none',
            
        }
    ]
};
option8 = {
    title : {
        show: false,
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}:{c}({d}%)"
    },
    legend: {
        show: false,
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6']
    },
    calculable : true,
    series : [
       {
            name:'半径模式',
            type:'pie',
            radius : ['10%', '66%'],
            center : ['50%', '55%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false,
                    fontSize: 10,
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    length: 10,
                    length2: 40,
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'rose1',},
                {value: 5,  name:'rose2'},
                {value: 15, name:'rose3'},
                {value: 25, name:'rose4'},
                {value: 20, name:'rose5'},
                {value: 35, name:'rose6'},
                {value: 30, name:'rose7'},
                {value: 40, name:'rose8'}
            ]
        },
    ]
};


    myChartlb.setOption(option5);
    myChartlt.setOption(option6);
    myChartrt.setOption(option8);
    myChartrb.setOption(option7);

//数据输入的图

      option8 = {
      grid:{
                    x:'10%',
                    y:'10%',
                    x2:'10%',
                    y2:'10%',
                    borderWidth:1
                },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Sat', 'Sun'],
       axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#5c6475',
                       width:'2'
                   }
               },
    },
   calculable : true,
    yAxis: {
        type: 'value',
          axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#5c6475',
                       width:'2'
                   }
               },axisLabel: {
                show:true,
                   textStyle: {
                       color: '#ccc',
                       fontSize:8,
                   }
               }
    },

    series: [{
        data: [1, 2, 3, 4, 5],
        type: 'bar',
        color:'#f98377',
    }]
};
  option9 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};

option10 = {
   backgroundColor:'#182754',
    angleAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '七'],
        z: 10,
        axisLabel:{
          fontSize: '8'
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: false,
        data: ['A', 'B', 'C']
    }
};   

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

option11 = {
    backgroundColor:'#182754',
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        itemWidth: 10,
        itemHeight: 60,
        left: 10,
        bottom: 10,
    },
    xAxis3D: {
        type: 'category',
        data: hours,
        axisLabel:{
          show: false,
        }

    },
    yAxis3D: {
        type: 'category',
        data: days,
        axisLabel:{
          show: false,
        }
            
    },
    zAxis3D: {
        type: 'value',
        axisLabel:{
          show: false,
        }
    },
    grid3D: {
        boxWidth: 120,
        boxDepth: 60,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        },

    }]
}                       
  myCharts1.setOption(option8);
  myCharts2.setOption(option9);
  window.onresize = function(){
    //数据输入的图
    myChartlb.resize();
    myChartlt.resize();
    myChartrt.resize();
    myChartrb.resize();
    // 数据综合的图
    myCharts1.resize();
    myCharts2.resize();
   // 初始界面的图
   myChart1.resize();

    myChart2.resize();

    myChart3.resize();

    myChart4.resize();

  }
