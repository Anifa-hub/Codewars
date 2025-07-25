 
function arraySum(arr) {
  return arr.map((x)=>x.reduce((a,b)=>a+b))
}