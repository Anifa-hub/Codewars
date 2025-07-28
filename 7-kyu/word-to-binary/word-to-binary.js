​
function wordToBin(str) {
  return str.split('').map(char => {
    const asciiValue = char.charCodeAt(0); // Get the ASCII value of the character
    const binaryString = asciiValue.toString(2); // Convert the ASCII value to a binary string
    return binaryString.padStart(8, '0'); // Pad with leading zeros to make it 8 digits
  });
}
​