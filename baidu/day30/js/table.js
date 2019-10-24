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
                     td.innerText = data[j].sale[i];
                     tr.appendChild(td);
                 }
                 tbody.appendChild(tr);
             }  
             table.appendChild(tbody);
             myTable.appendChild(table);
        }