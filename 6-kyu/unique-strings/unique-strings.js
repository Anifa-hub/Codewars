 
function uniqCount(xs) {
 let chArray = xs.split('');
  
        // Using sorting
        chArray.sort();
  
        for (let i = 0; i < chArray.length - 1; i++) 
        {
  
            // if the adjacent elements are not
            // equal, move to next element
            if (chArray[i] != chArray[i + 1])
                continue;
  
            // if at any time, 2 adjacent elements
            // become equal, return false
            else
                return false;
        }
  
        return true;
}