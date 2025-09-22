function splitString(string) {
   let last = {};
  for (let i = 0; i < string.length; i++) {
    last[string[i]] = i;
  }
  let result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < string.length; i++) {
    end = Math.max(end, last[string[i]]);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
}