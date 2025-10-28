 
// Submit this if the nested LittleClass name is required to be "LittleClass"
public class Guesser {
    
    // Using the original class name
    public static class LittleClass { 
        public static String isMySecret(String secret) {
            return secret;
        }
    }
​
    public void guess() {
        LittleClass.isMySecret("thatILoveUnicorns");
    }
}