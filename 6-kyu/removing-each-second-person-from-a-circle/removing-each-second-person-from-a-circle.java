// import java.util.List;
​
// public class CircleOfPeople {
​
//     public static List<String> crossingOut(List<String> list) {
//             // TODO
//     }
// }
import java.util.ArrayList;
import java.util.List;
​
public class CircleOfPeople {
​
    public static List<String> crossingOut(List<String> list) {
        List<String> result = new ArrayList<>();
        List<String> circle = new ArrayList<>(list);
        int index = 0;
​
        while (circle.size() > 1) {
    
            index = (index + 1) % circle.size();
            result.add(circle.remove(index));
        }
​
        return result;
    }
}