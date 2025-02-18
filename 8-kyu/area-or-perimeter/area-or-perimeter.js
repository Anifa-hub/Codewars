const areaOrPerimeter = function(l , w) {
  let area = l*w
  let Perimeter = 2*(l + w)
  if(l==w){
    return area
  } else{
    return Perimeter 
  }
};