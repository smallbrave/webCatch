var myChart1 = echarts.init(document.getElementById('cr-bottom'));
var myChart2 = echarts.init(document.getElementById('cl-4'));
option1 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'铝'},
                {value:310, name:'硅'},
                {value:234, name:'铁'},
            ]
        }
    ]
};
myChart1.setOption(option1);
myChart2.setOption(option2);