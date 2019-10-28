function creatCheck(obj,array){
    var outside =document.createElement("label");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.value = "全选";
    outside.innerText = "全选";
    checkBox.setAttribute('checkbox-type',"all");
    outside.appendChild(checkBox);
    obj.appendChild(outside);
    for(var val of array){
        var outside =document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "checkbox";
        radio.name = obj.name;;
        radio.value = val ;
        outside.innerText = val;
        outside.appendChild(radio);
        obj.appendChild(outside);
    }  
}