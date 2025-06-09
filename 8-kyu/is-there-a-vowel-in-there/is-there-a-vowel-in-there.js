function isVow(a){
​
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelCodes = vowels.map(vowel => vowel.charCodeAt(0))
​
​
  return a.map(num => {
    if (vowelCodes.includes(num)) {
      return String.fromCharCode(num);
    }
    return num; // Keep the number if not a vowel code
  });
​
}