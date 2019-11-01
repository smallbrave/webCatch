      var bjld = document.querySelector(".bjld-font"); 
      var quyu = document.querySelector(".quyu");
      var quyuDetail = document.querySelectorAll(".quyu img");
     for (var i = quyuDetail.length; i >= 1; i--) {
       (function(i){
          quyuDetail[i-1].onclick = function(){
          quyuDetail[i-1].src = "image"+"/4/quyu"+i+"_"+i+".png";	
       		
          } 
      	  
        })(i)
     }

    setTimeout(function(){
       
       bjld.className += " bjld-font-change";

    },2000)
 