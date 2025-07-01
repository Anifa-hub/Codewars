function findAll(array, n) {
 const indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      indices.push(i);
    }
  }
  return indices;
}