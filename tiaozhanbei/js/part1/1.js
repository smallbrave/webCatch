  var smallBox = document.getElementsByClassName('small-box')[0];
  var left = document.getElementsByClassName('box-left')[0]; 
  var right = document.getElementsByClassName('box-right')[0];
 
   left.onclick = function(){  
   	   
     if(parseInt(smallBox.style.left) == 2){
        smallBox.style.left = 2 + 'vw';
        }
      else{
   	     smallBox.style.left = 2 + 'vw';
        }
   }

   right.onclick = function(){    
   	if(parseInt( smallBox.style.left)  == -8){
   		smallBox.style.left = 2 + 'vw';
   	}
   	else{
   		smallBox.style.left = -8 + 'vw';
   	}
   }