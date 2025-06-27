function solution(text, markers) {
  let variable = text.split('\n')
  let room = []
  for(let i of variable){
      if(i!==variable[0]){room.push('\n')}
    for(let x of i){
        if(markers.includes(x)){break}else{room.push(x)}
    }
  }
  return room.join('').split('\n').map(a=> a.trimEnd()).join('\n')
}