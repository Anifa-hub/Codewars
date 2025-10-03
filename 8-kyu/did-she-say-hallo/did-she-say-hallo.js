function validateHello(greetings) {
  let words = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  let lowerCaseGreetings = greetings.toLowerCase(); 
​
  for (let i = 0; i < words.length; i++) {
    if (lowerCaseGreetings.includes(words[i])) {
      return true; 
    }
  }
  return false; 
}