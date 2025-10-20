 
public class Kata {
  public static void _if(Boolean bool, Runnable func1, Runnable func2) {
   if (bool==true){
     System.out.println(func1);
   }
    else{
      System.out.println(func2);
    }
  }
}