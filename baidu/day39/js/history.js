//通过点击事件，对history对象添加url（以对历史记录进行记录）
function remember(obj,target){
    var url;
    if(target.checked){
    if(obj.name == "region" ){
        url = "#" + target.value + window.location.hash;
        history.pushState({},null,url);
    }else{
        url = "#" + target.value + window.location.hash;
        history.pushState({},null,url);
    }
}
}
//对历史记录（window.history）内容进行解析
function checkHistory(){
    var value =decodeURI(window.location.hash);
    var array = value.split("#");
    array = new Set(array.slice(1)); 
    var valList = Array.from(array);
    return valList;   
}
//页面渲染
function show(){
    var hashList = checkHistory();
    var regions = [];
    var products = [];
    for(var val of hashList){
        if(val === "华南" || val === "华北" || val === "华东"){
            regions.push(val);
            checkIt("region",val);
        }else{
            products.push(val); 
            checkIt("product",val);
        }
    }
    //表格，图表的描绘
    if(regions.length>0||products.length>0){
        myTable.innerHTML = "";
        createTable(toGetValue(regions,products)); 
        drawGraph(toGetValue(regions,products));
        drawChart(toGetValue(regions,products));    
    }
}
//监控当前活动历史项（又没有点击前进或者后退图标）
window.onpopstate = function(){
    this.show();
}
function toGetValue(o,p){
    var arrayR = [];
    var arrayP = [];
    var array  = []
    for(var val of o){
        for(var message of sourceData){
            if(val == message.region){  
                arrayR.push(message);
             }
        }
    }
    for(var val of p){
        for(var message of sourceData){
            if(val == message.product){
                arrayP.push(message);
            }
        }
    }
    if(arrayR.length<=0){
        return arrayP;
    }else if(arrayP.length<=0){
        return arrayR;
    }else{
     for(var val of arrayR){
         for(var message of arrayP){
             if(val.product == message.product){
                array.push(val);
                break;
         }
        }
    }
    return array;
    }
}
function checkIt(aspect,value){
    var regionsArray = regions.getElementsByTagName("input");
    var productsArray = products.getElementsByTagName("input");
    if(aspect === "region"){
        for(var val of regionsArray){
            if(val.parentElement.innerText == value){
                val.checked = true;
            }
        }
    }else{
        for(var val of productsArray){
            if(val.parentElement.innerText == value){
                val.checked = true;
            }
        }
    }
}
show();