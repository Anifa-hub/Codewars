class Solution {
  public static String camelCase(String input) {
    StringBuilder ans = new StringBuilder();
   for(char i : input.toCharArray()){
     if(Character.isUpperCase(i)){
       ans.append(" ");
     }
     ans.append(i);
   }
    return ans.toString();
  }
}