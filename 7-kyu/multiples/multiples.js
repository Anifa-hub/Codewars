function multiple(x) {
  if( x%3===0 && x%5===0){
    return "BangBoom"
  } else if(x%5===0){
    return "Boom"
  } else if(x%3===0){
    return "Bang"
  }else{
    return  "Miss"
  }
}