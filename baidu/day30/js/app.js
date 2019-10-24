var regions =document.getElementById("region-radio-wrapper");
regions.name = "region";
var products =document.getElementById("product-radio-wrapper");
products.name = "product";
var myTable = document.getElementById("table-wrapper");
creatCheck(regions,["华东","华北","华南"]); 
creatCheck(products,["手机","笔记本","智能音箱"]);
getItem(regions);
getItem(products);
