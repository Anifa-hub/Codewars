public class Scramblies {
 public static boolean scramble(String str1, String str2) {  
       
        if (str2.length() > str1.length()) {
            return false;
        }
        
        int[] counts = new int[26];
​
        for (char c : str1.toCharArray()) {
            counts[c - 'a']++;
        }
​
        for (char c : str2.toCharArray()) {
            int index = c - 'a';
            counts[index]--;
            if (counts[index] < 0) {
                return false;
            }
        }
        
        return true;
    }
}
​