function longer(s) {
 return s.split(' ').sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }else if(a.length === b.length){
        return s.sort()
      }
}).join(' ')
  }
​