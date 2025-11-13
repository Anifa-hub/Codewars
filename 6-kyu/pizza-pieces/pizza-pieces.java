public class Pizza {
  public static int maxPizza(int cuts) {
    double as;
    if(cuts < 0){
      return -1;
    }
    return (cuts * cuts + cuts + 2) / 2;
  }
}