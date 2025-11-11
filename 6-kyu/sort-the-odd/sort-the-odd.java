import java.util.Arrays;
public class Kata {
  public static int[] sortArray(int[] array) {
    for(int i= 0; i < array.length; i++){
      if(array[i] %2 !=0){
       return Arrays.sort(array);
      }
    }
    return array;
  }
}