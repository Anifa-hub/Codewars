function calculator(a,b,sign){
 if (typeof(a) !== "number"|| typeof(b) !== "number"){
  return "unknown value" }
  else
if(sign === "+"){return a+b}
  else if(sign === "-"){return a-b}
  else if(sign === "*"){return a*b}
  else if(sign === "/"){return a/b}
  
  else {return "unknown value" }
}