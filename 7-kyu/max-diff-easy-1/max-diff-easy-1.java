 
import java.util.Arrays;
public class Kata {
​
  public static int maxDiff(int[] lst) {
    //int [] fin = Arrays.toString(Arrays.sort(lst));
    Arrays.sort(lst);
    int min = lst[1];
    int max = lst[lst.length-1];
    return max-min;
  }
}