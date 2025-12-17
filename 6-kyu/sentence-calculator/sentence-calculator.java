public class SentenceCalculator {
​
    public static int lettersToNumbers(String s) {
        int totalScore = 0;
        for (char character : s.toCharArray()) {
​
            if (character >= 'a' && character <= 'z') {
                totalScore += (character - 'a' + 1);
​
            } else if (character >= 'A' && character <= 'Z') {
                totalScore += (character - 'A' + 1) * 2;
​
            } else if (character >= '0' && character <= '9') {
                totalScore += (character - '0');
​
            }
        }
​
        return totalScore;
    }
}
​
​