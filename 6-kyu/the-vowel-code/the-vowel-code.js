 
function encode(string) {
  let strin = string.split('')
  for(let i=0; i<strin.length; i++){
    if(strin[i]=='a'){
      return 1
    } else if(strin[i]=='e'){
      return 2
    }else if(strin[i]=='i'){
      return 3
    }else if(strin[i]=='o'){
      return 4
    }else if(strin[i]=='u'){
      return 5
    }
  }
}
​
function decode(string) {
    let stri = string.split('')
  for(let i=0; i<stri.length; i++){
    if(stri[i]==1){
      return 'a'
    } else if(stri[i]==2){
      return 'e'
    }else if(stri[i]==3){
      return 'i'
    }else if(stri[i]==4){
      return 'o'
    }else if(stri[i]==5){
      return 'u'
    }
  }
}