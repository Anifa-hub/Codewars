 
public class Solution {
   
  public static String vaporcode(String s) {
  
    String stringWithoutSpaces = s.replace(" ", "");
    String uppercaseString = stringWithoutSpaces.toUpperCase();
    String[] characters = uppercaseString.split("");
    return String.join("  ", characters);
  }
}
​