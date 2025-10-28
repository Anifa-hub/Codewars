 
public class kata{
public static class LittleClass{
  public static String isMySecret(String secret){
    return secret;
  }
}
​
public static class Guesser {
    public void guess() {
        LittleClass.isMySecret("thatILoveUnicorns");
    }
}
}
​