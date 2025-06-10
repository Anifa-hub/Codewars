function calculate(str) {
  return String (eval(str.replaceAll('plus','+').replaceAll('minus','-')));
}