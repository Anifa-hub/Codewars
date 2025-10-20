 
public class Kata {
  public static void _if(Boolean bool, Runnable func1, Runnable func2) {
   if (bool==true){
     func1.run();
   }
    else{
      func2.run();
    }
  }
}