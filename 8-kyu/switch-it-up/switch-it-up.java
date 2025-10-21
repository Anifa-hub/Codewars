 
public class Kata
{
  public static String switchItUp(int number)
  {
    String word;
    switch (number){
        case 0 :
          word = "Zero";
        case 1:
          word = "One";
        break;
        case 2:
          word = "Two";
        break;
        case 3:
          word = "Three";
        break;
        case 4:
          word = "Four";
        break;
        case 5:
          word = "Five";
        break;
        case 6:
          word = "Six";
        break;
        case 7:
          word = "Seven";
        break;
        case 8:
          word = "Eight";
        break;
        case 9:
          word = "nine";
        default:
          word = "input is invalid" ;
        break;
    }
    return word;
  }
}