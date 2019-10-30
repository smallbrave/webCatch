 //折线图 
 function drawChart(data){
     var line = lineChart.getContext("2d");
     lineChart.width = 700;
     lineChart.height = 500;
     line.beginPath();
     line.moveTo(50,100);
     line.lineTo(50,450);
     line.stroke();
     line.moveTo(50,450);
     line.lineTo(650,450);
     line.stroke();
     line.moveTo(50,100);
     line.lineTo(40,120);
     line.stroke();
     line.moveTo(50,100);
     line.lineTo(60,120);
     line.stroke();
     line.moveTo(650,450);
     line.lineTo(630,440);
     line.stroke();
     line.moveTo(650,450);
     line.lineTo(630,460);
     line.stroke();
     var pointWidth = 600/13;
     for(var val of data){
        line.beginPath();
        line.moveTo(50,450);
        for(var i = 0;i<val.sale.length;i++){
            var x = 50 + (i+1)*pointWidth;
            var y = 450 - val.sale[i];
            if(val.sale[i]>450){
                y = 0; 
            }
            line.lineTo(x, y);
            line.strokeStyle = rc();
            line.stroke();
        }
     }
 }
