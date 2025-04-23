function binaryToString(binary) {
  if (binary.length % 8 !== 0) {
    return "Binary string length is not a multiple of 8.";
  }
​
  let text = "";
  for (let i = 0; i < binary.length; i += 8) {
    const chunk = binary.slice(i, i + 8);
    const decimal = parseInt(chunk, 2);
​
    if (decimal < 0 || decimal > 127) {
      return "Invalid ASCII code found.";
    }
    text += String.fromCharCode(decimal);
  }
  return text;
}