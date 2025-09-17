 
function longer(s) {
 return s.split(' ').sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }
        return a.localeCompare(b)
   return b.localeCompare(a)
      }
).join(' ')
  }
​