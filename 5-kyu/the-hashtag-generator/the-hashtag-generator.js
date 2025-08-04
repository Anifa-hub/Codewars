function generateHashtag (str) { 
  str =str.split(' ').map((x)=>x.length>0?  x[0].toUpperCase()+x.slice(1) : x).join('')
  if(str.length === 0 || str.length >= 140) return false
      return `#${str}`
      
    
  }