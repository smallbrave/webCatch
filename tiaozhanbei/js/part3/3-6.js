//   var myCharts1 = echarts.init(document.getElementById("left"));
//   var myCharts2 = echarts.init(document.getElementById("right"));
//     option8 = {
//       grid:{
//                     x:'10%',
//                     y:'10%',
//                     x2:'10%',
//                     y2:'10%',
//                     borderWidth:1
//                 },
//     xAxis: {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Sat', 'Sun'],
//        axisLine: {
//                    lineStyle: {
//                        type: 'solid',
//                        color:'#5c6475',
//                        width:'2'
//                    }
//                },
//     },
//    calculable : true,
//     yAxis: {
//         type: 'value',
//           axisLine: {
//                    lineStyle: {
//                        type: 'solid',
//                        color:'#5c6475',
//                        width:'2'
//                    }
//                },axisLabel: {
//                 show:true,
//                    textStyle: {
//                        color: '#ccc',
//                        fontSize:8,
//                    }
//                }
//     },

//     series: [{
//         data: [1, 2, 3, 4, 5],
//         type: 'bar',
//         color:'#f98377',
//     }]
// };
//   option9 = {
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     calculable : true,
//     series : [
//         {
//             name:'访问来源',
//             type:'pie',
//             radius : ['50%', '70%'],
//             itemStyle : {
//                 normal : {
//                     label : {
//                         show : false
//                     },
//                     labelLine : {
//                         show : false
//                     }
//                 },
//                 emphasis : {
//                     label : {
//                         show : true,
//                         position : 'center',
//                         textStyle : {
//                             fontSize : '30',
//                             fontWeight : 'bold'
//                         }
//                     }
//                 }
//             },
//             data:[
//                 {value:335, name:'直接访问'},
//                 {value:310, name:'邮件营销'},
//                 {value:234, name:'联盟广告'},
//                 {value:135, name:'视频广告'},
//                 {value:1548, name:'搜索引擎'}
//             ]
//         }
//     ]
// };
                                      
//   myCharts1.setOption(option8);
//   myCharts2.setOption(option9);
