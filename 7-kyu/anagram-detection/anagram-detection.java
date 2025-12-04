import java.util.*;
public class Kata {
  public static boolean isAnagram(String a, String b) {
    String ansA = a.replace("\\s", "").toLowerCase();
    char[] FinalA = ansA.toCharArray();
    String ansB = b.replace("\\s", "").toLowerCase();
    char[] FinalB = ansB.toCharArray();
    Arrays.sort(FinalA);
    Arrays.sort(FinalB);
    if(Arrays.equals(FinalA,FinalB)){
      return true;
    }
    return false;
  }
}