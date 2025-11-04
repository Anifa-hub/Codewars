 
import java.util.Arrays;
public class Kata {
​
  public static int maxDiff(int[] lst) {
    //int [] fin = Arrays.toString(Arrays.sort(lst));
    Arrays.sort(lst);
    int min = lst[0];
    int max = lst[list.size()-1];
    return max-min;
  }
}