function  removeEveryOther ( arr ){ 
  // Create a new array for return 
  let newArr = [] 
 // Count how many times to splice 
  const count = Math . round (arr. length / 2 ) 
 // Splice every other element and push it into newArr 
  for ( let i = 0 ; i < arr. length ; i++) { 
    const element = arr. splice (i, 1 ) 
    newArr. push (element[ 0 ]) 
  } 
  return newArr 
}
​