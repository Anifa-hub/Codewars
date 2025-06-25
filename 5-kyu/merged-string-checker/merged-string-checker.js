function isMerge(s, part1, part2) {
  
  if (part1.length + part2.length != s.length)
    return false;
    
  // Recursive function
  function g(i, j){
    
    if (i == part1.length && j == part2.length)
      return true;
   
    if (i > part1.length || j > part2.length)
      return false;
    
    if (part1[i] == s[i + j] && part2[j] != s[i + j])
      return g(i + 1, j);
      
    
    else if (part1[i] != s[i + j] && part2[j] == s[i + j])
      return g(i, j + 1);
    
    else if (part1[i] == s[i + j] && part2[j] == s[i + j])
      return g(i + 1, j) || g(i, j + 1);
    
    return false;
  }
    
  
  return g(0,0);
}