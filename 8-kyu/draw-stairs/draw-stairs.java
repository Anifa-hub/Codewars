public class Stairs{
  public static String draw(int n){
    // do something
    StringBuilder result = new StringBuilder();
        for (int i = 0; i < n; i++) {
      
            for (int j = 0; j < i; j++) {
                result.append(" ");
            }
            result.append("I");
            
            if (i < n - 1) {
                result.append("\n");
            }
        }
        return result.toString();
  }
}