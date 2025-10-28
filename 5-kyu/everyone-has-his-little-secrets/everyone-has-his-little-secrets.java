public class LittleClass{
  public static void isMySecret(String secret){
    System.out.println("my secret is "+ secret);
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