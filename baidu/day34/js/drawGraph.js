var w = 600+100;
var h = 10*40+100;//难度值*40高度倍率+双倍PADDING
s1.setAttribute('width', w);
s1.setAttribute('height', h);
function drawGraph(data){
    var data = data[0].sale;
    var colWidth = 600/(2*data.length+1);
    var group = `
           <g id="group" stroke="#555" stroke-width="2">
              <!--X轴-->
              <line x1="50" y1="450" x2="650" y2="450"></line>
              <line x1="630" y1="440" x2="650" y2="450"></line>
              <line x1="630" y1="460" x2="650" y2="450"></line>
              <!--Y轴-->
              <line x1="50" y1="450" x2="50" y2="50"></line>
              <line x1="40" y1="70" x2="50" y2="50"></line>
              <line x1="60" y1="70" x2="50" y2="50"></line>
            </g>`;
        s1.innerHTML += group;    
    for(var i=0; i<data.length; i++){
        var d = data[i]; //遍历每个数据对象
        var cw = colWidth;  //柱子的宽
        var ch = d;  //柱子的高
        var x = (2*i+1)*colWidth + 50;
        var y = 500-50-ch;

    //动态添加渐变对象
        var c = rc();  //渐变颜色
        var html = `
            <linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0" stop-color="${c}"></stop>
                <stop offset="100%" stop-color="${c}" stop-opacity="0"></stop>
            </linearGradient>
            `;
        effectList.innerHTML += html;
    //动态创建矩形
        if(s1.getElementsByTagName("rect").length < 12){
            var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            rect.setAttribute('width', cw);
            rect.setAttribute('height', ch);
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('fill', `url(#g${i})`);
            s1.appendChild(rect);
        }else{
            var rects = document.getElementsByTagName("rect");
            rects[i].setAttribute('width', cw);
            rects[i].setAttribute('height', ch);
            rects[i].setAttribute('x', x);
            rects[i].setAttribute('y', y);
            rects[i].setAttribute('fill', `url(#g${i})`);
        }                   
    }

}
    //random color
    function rc(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }