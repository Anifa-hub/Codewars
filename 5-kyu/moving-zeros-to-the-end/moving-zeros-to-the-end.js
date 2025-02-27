function moveZeros(arr) {
const result = [];
    const zeros = [];
  
    for (let i in arr) {
      if (arr[i] === 0) {
        zeros.push(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result.concat(zeros);
  }