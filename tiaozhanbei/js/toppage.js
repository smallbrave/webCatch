var x1 = document.getElementById("button1");
var x2=document.getElementById("button2");
var words1 = new Array();
words1[1]=document.getElementById("process-one1");
words1[2]=document.getElementById("process-two1");
words1[3]=document.getElementById("process-three1");
words1[4]=document.getElementById("process-four1");
words1[5]=document.getElementById("process-five1");
words1[6]=document.getElementById("process-six1");
words1[7]=document.getElementById("process-one2");
words1[8]=document.getElementById("process-two2");
words1[9]=document.getElementById("process-three2");
words1[10]=document.getElementById("process-four2");
words1[11]=document.getElementById("process-five2");
words1[12]=document.getElementById("process-six2");
words1[13]=document.getElementById("circle1");
words1[14]=document.getElementById("circle2");
words1[15]=document.getElementById("circle3");
words1[16]=document.getElementById("circle4");
words1[17]=document.getElementById("circle5");
words1[18]=document.getElementById("circle6");
x1.onclick=function () {
    x2.style.border="0.5vw solid #553D78";
    x2.style.backgroundColor="#553D78";
          for( var i=2;i<=6;i++)
          {
              if(words1[i].style.textShadow!="none")
              {
                  words1[i].style.textShadow="none";
                  words1[i+6].style.textShadow="none";
                  words1[i+12].style.boder="0.1vw solid #ffffff";
                  words1[i+12].style.backgroundColor="#ffffff";
                  words1[i-1].style.textShadow="0.2vw 0.2vw 1vw #1122f7";
                  words1[i+5].style.textShadow="0.2vw 0.2vw 1vw #1122f7";
                  words1[i+11].style.boder="0.1vw solid #6411E8";
                  words1[i+11].style.backgroundColor="#6411E8";
                  break;
              }
          }
    if(words1[1].style.textShadow)
    {
        x1.style.border="0.5vw solid #3B2D5F";
        x1.style.backgroundColor="#3B2D5F";
    }
};
x2.onclick=function () {
    x1.style.border="0.5vw solid #553D78";
    x1.style.backgroundColor="#553D78";
    for( var i=1;i<=5;i=i+1)
    {
        console.log(i);
        if(words1[i].style.textShadow!="none"){
            words1[i].style.textShadow="none";
            words1[i+6].style.textShadow="none";
             words1[i+12].style.boder="0.1vw solid #ffffff";
             words1[i+12].style.backgroundColor="#ffffff";
              words1[i+1].style.textShadow="0.2vw 0.2vw 1vw #1122f7";
            words1[i+7].style.textShadow="0.2vw 0.2vw 1vw #1122f7";
            words1[i+13].style.boder="0.1vw solid #6411E8";
            words1[i+13].style.backgroundColor="#6411E8";
            break;
        }
    }
    if(words1[6].style.textShadow)
    {
        x2.style.border="0.5vw solid #3B2D5F";
        x2.style.backgroundColor="#3B2D5F";
    }
};