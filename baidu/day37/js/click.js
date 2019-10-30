            //处理选择的显示情况
            function getItem(obj){
                var arrayVal = obj.getElementsByTagName("input");
                for(var i = 0;i < arrayVal.length;i++){
                    arrayVal[i].onclick = function(e){
                        getChecked(obj,e);
                        myTable.innerHTML = "";
                        createTable(getValue());
                        effectList.innerHTML = "";
                        drawGraph(getValue());
                        drawChart(getValue());
                        //表格内容监控
                        var tableWrapper = document.getElementById("table-wrapper");
                        inputList = tableWrapper.getElementsByTagName("input");
                        
                    }
                }
                return getValue();
           }
           //获取选项状态
           function getChecked(obj,e){
               if(e.target.getAttribute("checkbox-type")){
                    if(!e.target.checked){
                        cancleAll(e.target);
                        }else{
                            makeAll(e.target);
                        }
                }else if(makeSure(e.target)>2){
                    makeAll(e.target);
                }else if(makeSure(e.target)<=2){
                    obj.getElementsByTagName("input")[0].checked = false;
                }
           }
           //全选
           function makeAll(obj){
               var divBox = obj.parentElement.parentElement; 
               var inputArray = divBox.getElementsByTagName("input");
               for(var val of inputArray){
                   val.checked = true;
               }
           }
           //取消全选
           function cancleAll(obj){
            var divBox = obj.parentElement.parentElement; 
               var inputArray = divBox.getElementsByTagName("input");
               for(var val of inputArray){
                   val.checked = false;
               }
           }
           //获取选择的数目是否有满足全选
           function makeSure(obj){
               var count = 0;
               var divBox = obj.parentElement.parentElement; 
               var inputArray = divBox.getElementsByTagName("input");
               for(var val of inputArray){
                   if(val.checked == true && !val.getAttribute("checkbox-type")){
                       count++;
                   }
               }
               return count;
           }
           //获取选中的数据
           function getValue(){
               var regionsArray = regions.getElementsByTagName("input");
               var productsArray = products.getElementsByTagName("input");
               var arrayR = [];
               var arrayP = [];
               var array  = []
               for(var val of getCheckedVal(regionsArray)){
                   for(var message of sourceData){
                       if(val == message.region){  
                           arrayR.push(message);
                        }
                   }
               }
               for(var val of getCheckedVal(productsArray)){
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
           function getCheckedVal(arrayList){
               var array = [];
               for(var val of arrayList){
                    if(val.checked){
                    array.push(val.parentElement.innerText);
                   }
                }
                return array;
           }