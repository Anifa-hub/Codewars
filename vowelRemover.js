function checking(word){
    let word2 = word.split('')
    let remain=[]
    for(let i=0; i<word2.length; i++){
    if(word2[i]=='a' || word2[i]=='i' || word2[i]=='e' || word2[i]=='o' || word2[i]=='u'){
    console.log('')
    }else{
      remain.push(word2[i])
    }
      
    }
      return remain.join('')
      }
    
    console.log(checking('hello'))