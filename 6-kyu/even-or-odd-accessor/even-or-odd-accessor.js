function evenOrOdd(n) {
  if( n.isArray === 'true' && n[0]%2 ===0 || n % 2 === 0){
    return "Even"
  }
  if(n.isArray === 'false' && n[0] % 2 !== 0 || n % 2 !== 0) {
    return "Odd";
  }
}