import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
​
public class Kata {
  public static int[] sortArray(int[] array) {
    List<Integer> oddNumbers = new ArrayList<>();
    for (int number : array) {
      if (number % 2 != 0) {
        oddNumbers.add(number);
      }
    }
    Collections.sort(oddNumbers);
​
    int oddIndex = 0;
    for (int i = 0; i < array.length; i++) {
​
        if (array[i] % 2 != 0) { 
            array[i] = oddNumbers.get(oddIndex);
            oddIndex++;
        }
        
    }
    return array;
  }
  }