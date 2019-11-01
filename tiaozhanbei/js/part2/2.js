  var crcMiddle = document.getElementsByClassName("crc-middle")[0];
  var btn = crcMiddle.getElementsByTagName("button")[0];
  var conLeftCon = document.getElementsByClassName("con-left-con-1"); 
  var theChoose = -1;
  for (var i = conLeftCon.length - 1; i >= 0; i--) {
        (function(i){
        	conLeftCon[i].onclick = function(){
        	conLeftCon[i].style.backgroundColor = "#3c439145";
            theChoose = i;
            console.log(theChoose);
            alert("你已成功选择了图像形式");
        }
      })(i);
  	
  }
   
   btn.onclick = function(){
   	if(theChoose < 0){
   		alert("请先选择你的图像形式");
   	}else if(theChoose<=3){
   		let theChoose1 = theChoose+5;
   	  let theCrcBottom = echarts.init(document.getElementById("crcMiddle"));
      let o = "option" + theChoose1;
      let obj = eval("(" + o +")");
  	  conLeftCon[theChoose].style.backgroundColor = "";
  	  theCrcBottom.clear();
  	  theCrcBottom.setOption(obj);	
   	}
   	else if(theChoose>=4 && theChoose<=7 ){
   		let theChoose2 =  theChoose+1;
     let theCrcBottom = echarts.init(document.getElementById("crcMiddle"));
      let o = "option" + theChoose2;
      let obj = eval("(" + o +")");
  	  conLeftCon[theChoose].style.backgroundColor = "";
  	  theCrcBottom.clear();
  	  theCrcBottom.setOption(obj);	        
  }else{
  	  let theChoose3 =  theChoose-3;
     let theCrcBottom = echarts.init(document.getElementById("crcMiddle"));
      let o = "option" + theChoose3;
        	  conLeftCon[theChoose].style.backgroundColor = "";
      let obj = eval("(" + o +")");
  	  theCrcBottom.clear();
  	  theCrcBottom.setOption(obj);	        
  }  	  
 }
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
