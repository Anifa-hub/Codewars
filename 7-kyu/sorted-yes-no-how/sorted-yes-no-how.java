import java.util.*;
​
class Solution {
    public static String isSortedAndHow(int[] array) {
        boolean ascending = true;
        boolean descending = true;
​
        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                ascending = false;
            }
            if (array[i] < array[i+1]) {
                descending = false;
            }
            // Optional optimization
            if (!ascending && !descending) {
                return "no";
            }
        }
​
        if (ascending) {
            return "yes, ascending";
        } else if (descending) {
            return "yes, descending";
        }
        return "no"; 
    }
}