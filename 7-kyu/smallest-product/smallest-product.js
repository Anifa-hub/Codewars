function smallestProduct(arr) {
    
let array = arr.map((x)=>{
  return  x.reduce((a,b)=>a*b)
    
})
return Math.min(...array)
​
 
 }