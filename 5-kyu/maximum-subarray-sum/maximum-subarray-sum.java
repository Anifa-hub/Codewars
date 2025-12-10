public class Max {
    public static int sequence(int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0;
        }
        
        int max_so_far = 0;
        int current_max = 0;
​
        for (int number : arr) {
            current_max += number;
​
            if (current_max < 0) {
                current_max = 0;
            }
​
            if (current_max > max_so_far) {
                max_so_far = current_max;
            }
        }
​
        return max_so_far;
    }
}
​