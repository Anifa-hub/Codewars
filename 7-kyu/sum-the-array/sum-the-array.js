//Your code goes here
Array.prototype.sum=function (){
 return this.reduce((x,y)=>x+y,0)
}