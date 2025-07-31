function evenOrOdd(n) {
  const getStatus = (val) => {
    if (typeof val !== 'number' || !Number.isInteger(val)) {
      return `Invalid element: '${val}' (not an integer)`;
    }
    return val % 2 === 0 ? "Even" : "Odd";
  };
​
  if (Array.isArray(n)) {
    return n.map(getStatus);
  }
​
  return getStatus(n);
}