import java.util.Arrays;
public class Kata {
​
  public static int maxDiff(int[] lst) {
    if (lst == null || lst.length < 2) {
      return 0; 
    }
    //int [] fin = Arrays.toString(Arrays.sort(lst));
    Arrays.sort(lst);
    int min = lst[0];
    int max = lst[lst.length-1];
    return max-min;
  }
}