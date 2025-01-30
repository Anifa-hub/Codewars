
function digitalRoot(n){
    if(n<10) return n
       let num=n.toString().split('').map(Number).reduce((a,b)=>a+b)
     return digitalRoot(num)
  }