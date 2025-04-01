  function findDifference(a, b) {
  const reducer = (acc, num) => acc * num
  let c = a.reduce(reducer, 1);
  let d = b.reduce(reducer, 1);
  if (c > d) {
    return c - d;
  } else 
    return d - c;
}