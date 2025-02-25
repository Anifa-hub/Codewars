 
function alphabetPosition(text) {
  return text.split('').filter(v=>/[a-zA-Z]/).map(v=>v.toLowerCase().charCodeAt(0)-26).join(' ');
}