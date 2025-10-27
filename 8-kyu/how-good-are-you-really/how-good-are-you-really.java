 
public class Solution {
    public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
        double sumClassPoints = 0;
        for (int score : classPoints) {
            sumClassPoints += score;
        }
        sumClassPoints += yourPoints;
        int totalStudents = classPoints.length + 1;
        double averageScore = sumClassPoints / totalStudents;
​
        return yourPoints > averageScore;
    }
}