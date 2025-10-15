 public class Kata {
​
  public static int dutyFree(int normPrice, int discount, int hol) {
    double save = (double) normPrice * ((double)discount/100);
    return  (int) (hol/save);
    
  }
​
}