public class Kata {
  public static void _if(Boolean bool, Runnable func1, Runnable func2) {
   if (bool != null && bool.booleanValue()){
     func1.run();
   }
    else{
      func2.run();
    }
  }
}