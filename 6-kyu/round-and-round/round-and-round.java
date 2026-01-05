import java.math.BigDecimal;
import java.math.RoundingMode;
​
public class RoundAndRound {
​
    public static double roundTo2DecimalPlaces(double number) {
        BigDecimal bd = BigDecimal.valueOf(number);
        bd = bd.setScale(2, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
​
​