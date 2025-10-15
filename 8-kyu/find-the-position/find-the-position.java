 
public class Kata
{
  public static String position(char alphabet)
  {
     if (alphabet >= 'a' && alphabet <= 'z') {
            int position = alphabet - 'a' + 1;
            return "Position of alphabet: " + position;
        }else {
        return "inpur should be lowercase";
     }
    
  }
}