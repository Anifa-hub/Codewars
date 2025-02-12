function smallWordHelper(sentence){
  let word = sentence.split(' ')
  let array =[];
  for(let i=0; i<word.length; i++){
  if(word[i].length>3){
   array.push(word[i].replace(/[aeiouAEIOU]/g, ''))
}else{
   array.push(word[i].toUpperCase())
}
}
return array.join(' ');

}