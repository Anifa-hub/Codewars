 
public class FileNameExtractor {
    public static String extractFileName(String dirtyFileName) {
      int first = dirtyFileName.indexOf("_");
      int last = dirtyFileName.lastIndexOf(".");
      
      if(first>0 && last>first){
        return dirtyFileName.substring(first+1,last);
      } 
        return "Show me the code!";
    }
}
​