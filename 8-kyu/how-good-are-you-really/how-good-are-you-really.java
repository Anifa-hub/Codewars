public class Solution {
    public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
        // Calculate the sum of all class points
        double sumClassPoints = 0;
        for (int score : classPoints) {
            sumClassPoints += score;
        }
​
        // Add your points to the sum
        sumClassPoints += yourPoints;
​
        // Calculate the total number of students, including yourself
        int totalStudents = classPoints.length + 1;
​
        // Calculate the average score
        double averageScore = sumClassPoints / totalStudents;
​
        // Compare your score with the average
        return yourPoints > averageScore;
    }
}