import java.util.*;
​
public class Kata{
    public static int [] vowelIndices(String word){
    String wrd = word.toLowerCase();
    ArrayList <Integer> ans = new ArrayList<>();
    
    String vowels = "iuoaey";
    for(int i =0; i<wrd.length(); i++){
       if(vowels.contains(String.valueOf(wrd.charAt(i)))){
           ans.add(i+1);
       }
      
    }
    return ans.stream().mapToInt(Integer::intValue).toArray();
  }
  
  
}