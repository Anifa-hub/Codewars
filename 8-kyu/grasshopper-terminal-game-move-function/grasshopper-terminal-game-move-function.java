public class Move {
    public static int move(int position, int roll) {
         int movement = roll * 2;
        int newPosition = position + movement;
        return newPosition;
    }
}