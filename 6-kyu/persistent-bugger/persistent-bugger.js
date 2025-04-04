function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  let mult = 1;
  let splitStr = num.toString().split("");
  for (let i = 0; i < splitStr.length; i++) {
    mult *= Number(splitStr[i])
  }
  return 1 + persistence(Number (mult)) ;
}