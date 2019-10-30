var btn = document.getElementById("submit");

btn.onclick = function(){
    var array = [];
    for(var val of inputList){
        array.push(val.value);
        val.onblur = function(e){
            checkIn(e.target.value);
        }
    }
    save(array);
}
function save(dataModel){
    var value = dataModel;
    var array = [];
    window.localStorage['DataModel'] = value;
    window.localStorage['DataCount'] = value.length;
    for(var i = 0;i < value.length/12;i++){
        array[i] = new Array();
        for(var j = i*12;j < i * 12 + 12;j++){
            array[i].push(value[j]);
        }
}
    value = array;
    console.log(value);
    return value;
}

function checkIn(data){
    var message = parseFloat(data);
    if(isNaN(message)){
        alert("not a number");
    }else{
        return true;
    }   
}
//input键盘事件监听
 function tableInput(val){
     var value = val;
    for(var val of inputList){
        val.onkeyup = function(e){
            console.log(e);
            if(e.code == "Enter"){
                var inputVal = e.target.value;
                if(checkIn(inputVal)){
                   e.target.parentElement.innerHTML = inputVal + "<span>编辑</span>";
                }
            }
            if(e.code == "Escape"){
                e.target.parentElement.innerHTML = value + "<span>编辑</span>";
            }
        }       
    }
    //点击input外的事件
    document.onclick = function(){
        try{
            var tableWrapper = document.getElementById("table-wrapper");
            var inputList = tableWrapper.getElementsByTagName("input")[0];
            inputList.parentElement.innerHTML = value + "<span>编辑</span>";      
        }catch(error){
            console.log(error);
        }
    }
 }
 //对取消和确定按钮的监听
 function judge(val){
    
    var value = val;

     var btnCancel = document.getElementsByClassName("cancel")[0];
     var btnConfirm = document.getElementsByClassName("confirm")[0];

     //点击取消时
     btnCancel.onclick = function(e){
        e.target.parentElement.innerHTML = value + "<span>编辑</span>";
     } 
     //点击确定时
     btnConfirm.onclick = function(e){
         var inputVal = e.target.parentElement.children[0].value;
         if(checkIn(inputVal)){
            e.target.parentElement.innerHTML = inputVal + "<span>编辑</span>";
         }
     }
 }