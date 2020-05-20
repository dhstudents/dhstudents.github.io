function Calc(a , b) { 
   return a + b
}


var x = +prompt("Enter #1") 
var y = +prompt("Enter #1") 


var r = Calc(x,y);

var el = document.createElement('div');
el.textContent = r.tostring();
document.body.appendChild(el)