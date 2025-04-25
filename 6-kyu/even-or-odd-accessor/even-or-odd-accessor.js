 
function evenOrOdd(n) {
  if( array.isArray(n) === true && n[0]%2 ===0 || n % 2 === 0){
    return "Even"
  }
  if(array.isArray(n) === false && n[0] % 2 !== 0 || n % 2 !== 0) {
    return "Odd";
  }
}