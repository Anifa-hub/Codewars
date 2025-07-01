 
function parseInt(string) {
  string = string.toLowerCase();
  string = string.replace(/(\sand\s|[-])/g, " ");
  string = string.replace(/[,]/g, "");
​
  if (string.includes("million")) return 1000000;
​
  const strArr = string.split(" ");
​
  const parsed = strArr => {
    return strArr.reduce((acc, word, i, words) => {
      switch (word) {
        case "thousand":
          return (acc = acc * 1000 + parsed(words.splice(i + 1)));
        case "hundred":
          return (acc *= 100);
        default:
          return (acc += wordReps[word]);
      }
    }, 0);
  };
​
  return parsed(strArr);
}
  