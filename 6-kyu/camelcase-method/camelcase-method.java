import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.Locale;
​
public class Solution {
​
    public static String camelCase(String str) {
       String[] words = str.replaceAll("[^a-zA-Z\\s]", "").toLowerCase(Locale.ROOT).trim().split("\\s+");
       return Arrays.stream(words)
            .map(word -> {
  
                if (word.isEmpty()) {
                    return "";
                
                } else {
                    
                  
                    return Character.toUpperCase(word.charAt(0)) + word.substring(1);
                }
            })
            .collect(Collectors.joining());
    }
​
}
​