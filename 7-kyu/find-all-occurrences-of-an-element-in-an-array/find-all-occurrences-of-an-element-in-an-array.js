 
function findAll(array, n) {
  let room =[]
for(let arr of array){
  arr==n ? room.push(array.indexOf(arr)):[]
}
  return room
}