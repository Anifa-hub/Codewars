public class Solution {
​
    public static String timeCorrect(String timestring) {
        if (timestring == null || timestring.isEmpty()) {
            return timestring;
        }
       if (parts.length != 3) {
            throw new IllegalArgumentException("Invalid time format. Expected HH:MM:SS.");
        }
​
        String[] parts = timestring.split(":");
​
        int hours = Integer.parseInt(parts[0]);
        int minutes = Integer.parseInt(parts[1]);
        int seconds = Integer.parseInt(parts[2]);
​
    
        int carriedMinutes = seconds / 60; 
        int correctedSeconds = seconds % 60; 
        minutes += carriedMinutes;
        int carriedHours = minutes / 60;
        int correctedMinutes = minutes % 60;
        hours += carriedHours;
        int correctedHours = hours % 24;
​
        return String.format("%02d:%02d:%02d", correctedHours, correctedMinutes, correctedSeconds);
    }
}