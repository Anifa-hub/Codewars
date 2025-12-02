public class Vowels {
​
  public static int getCount(String str) {
    char[] ch = str.toCharArray();
    int count = 0;
​
    for (char c : ch) {
      if (c == 'a' || c == 'e'  ||c == 'i' || c == 'o'  ||c == 'u') {
        count++;
      }
    }
    return count;
  }
}