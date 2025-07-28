function wordToBin(str) {
  return str.split('').map(char => {
    const asciiValue = char.charCodeAt(0);
   const binaryString = asciiValue.toString(2);
    return binaryString.padStart(8, '0');
    });
}
​