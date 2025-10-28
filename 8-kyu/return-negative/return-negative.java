public class Kata {
​
  public static int makeNegative(final int x) {
    
    switch(x){
        case -x:
        return x;
        break;
        case 0:
        return 0;
        break;
        default:
        return -x;
        break;
    }
    
    return ; // Your code here.
    
  }
  
}