var btn = document.getElementById("submit");

btn.onclick = function(){
    var tableWrapper = document.getElementById("table-wrapper");
    var inputList = tableWrapper.getElementsByTagName("input");
    var array = [];
    for(var val of inputList){
        array.push(val.value);
    }
    save(array);
}
function save(dataModel){
    var value = dataModel;
    console.log(value);
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