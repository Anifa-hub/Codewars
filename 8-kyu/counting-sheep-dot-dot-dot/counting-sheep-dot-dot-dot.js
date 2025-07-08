function countSheeps(sheep) {
  let room =0
sheep.map((x,y)=> x==true? room+=1 : false )
  return room
 
}