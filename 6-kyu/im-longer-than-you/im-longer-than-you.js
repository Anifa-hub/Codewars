function longer(s) {
  return s.split(' ').sort((a, b) => {
   
    if (a.length !== b.length) {
      return a.length - b.length;
    }
 
    const minLength = Math.min(a.length, b.length);
    for (let i = 0; i < minLength; i++) {
      const charA = a.charCodeAt(i);
      const charB = b.charCodeAt(i);
​
      if (charA !== charB) {
      
        return charA - charB;
      }
    }
  
    return a.length - b.length;
  }).join(' ');
}
​
​