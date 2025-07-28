function scramble(str, arr) {
  let room =[]
  for(let i=0; i<str.length;i++){
    room[arr[i]]=str[i]
  }
  return room.join(''); // your code here
};