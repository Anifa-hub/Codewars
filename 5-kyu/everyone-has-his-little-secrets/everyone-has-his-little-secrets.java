 
public class LittleClass{
  public static String isMySecret(String secret){
    return secret;
  }
}
​
public class Guesser {
    public void guess() {
        LittleClass.isMySecret("thatILoveUnicorns");
    }
}
​
​