 
function evenOrOdd(n) {
  if( Array.isArray(n) === true && [n].map((x)=>x%2 ===0) || n % 2 === 0){
    return "Even"
  }
  if(Array.isArray(n) === false && [n] % 2 !== 0 || n % 2 !== 0) {
    return "Odd";
  }
}