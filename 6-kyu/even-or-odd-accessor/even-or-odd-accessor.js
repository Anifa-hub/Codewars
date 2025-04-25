 
function evenOrOdd(n) {
 if (n.isInteger(n)) {
    return n % 2 === 0 ? "Even" : "Odd";
  }
  return undefined; // Or throw an error for non-integer input
}
​