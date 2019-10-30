           //创建表格
        function createTable(data){
            var table = document.createElement("table");
             var thead = document.createElement("thead");
             var tbody = document.createElement("tbody");
             var myTdOne = document.createElement("td");
             myTdOne.innerText = "商品";
             thead.appendChild(myTdOne);
             var myTdTwo = document.createElement("td");
             myTdTwo.innerText = "地区";
             thead.appendChild(myTdTwo);
             for(var i = 1;i <= 12;i++){
             var td = document.createElement("td");
             td.innerText = i + "月销量";
             thead.appendChild(td);
             }
             table.appendChild(thead);
             for(var j = 0;j<data.length;j++){
                 var tr = document.createElement("tr");
                 var myTdOne = document.createElement("td");
                 myTdOne.innerText = data[j].product;
                 tr.appendChild(myTdOne);
                 var myTdTwo = document.createElement("td");
                 myTdTwo.innerText = data[j].region;
                 tr.appendChild(myTdTwo);
                 for(var i = 0;i < 12;i++){
                     var td = document.createElement("td");
                     var span = document.createElement("span");
                     td.innerText = data[j].sale[i];
                     span.innerText = "编辑";
                     td.appendChild(span);
                     tr.appendChild(td);
                     tdClick(td);
                 }
                 tbody.appendChild(tr);
             }  
             table.appendChild(tbody);
             myTable.appendChild(table);
        }

        function tdClick(obj){
            obj.onclick = function(e){
                if(e.target.localName == "td"){
                    var local = e.target.innerText.slice(0,-2);
                    e.target.innerHTML = `<input type='text' value='' />
                                          <button class='cancel'> 取消 </button>
                                          <button class='confirm'> 确定 </button>`;
                                          judge(local);
                                          tableInput(local);
                }
                e.stopPropagation();
            }   
        }