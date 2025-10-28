 
​
// File 1 (Conceptually): LittleClass.java
public class LittleClass {
    
    // The method must be static because Guesser calls it using the class name.
    // It returns the String provided by Guesser, which is the "secret."
    public static String isMySecret(String secret) {
        return secret;
    }
}
// ------------------------------------------------------------------------
// File 2 (Conceptually): Guesser.java
public class Guesser {
    
    // This is the class and method the tests are calling.
    public void guess() {
        // This call is now valid because LittleClass is a top-level class 
        // and isMySecret is a public static method.
        LittleClass.isMySecret("thatILoveUnicorns");
    }
}
​