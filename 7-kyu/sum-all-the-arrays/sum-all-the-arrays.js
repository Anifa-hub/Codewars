 
function arraySum(arr) {
  return arr.map((x)=>{Array.isArray(x)?x.reduce((a,b)=>a+b):break})
}