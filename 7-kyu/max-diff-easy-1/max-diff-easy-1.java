 
import java.util.Arrays;
public class Kata {
​
  public static int maxDiff(int[] lst) {
    int [] fin = Arrays.sort(lst);
  
    return fin(0)-fin(1);
  }
}