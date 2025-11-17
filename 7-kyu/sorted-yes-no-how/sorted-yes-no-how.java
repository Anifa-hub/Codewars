import java.util.*;
class Solution {
    public static String isSortedAndHow(int[] array) {
      if(Arrays.sort(array)){
      return  "yes, ascending";
      } else if(Arrays.sort(array,Comparator.reverseOrder())){
        return "yes, descending";
      }
       return "no"; 
    }
}