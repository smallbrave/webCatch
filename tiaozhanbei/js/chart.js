// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('show-second-box'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: ''
    },
    tooltip: {},
    xAxis: {
        data: ["数据","数据","数据","数据","数据","数据"]
    },
    yAxis: {},
    series: [{
        name: 'value',
        type: 'bar',
        data: [550, 320, 160, 450, 380, 220],
        color: "#adc70c"
    }]
};  
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);