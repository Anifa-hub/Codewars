

function hello(name) {

  if(name === '' || !name){
    return 'Hello, World!'
      
  }else{
return `Hello, ${name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()}!`
  
}}
console.log(hello())