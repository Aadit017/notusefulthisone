import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
public class trying{ 
    public static void main(String args[]) throws FileNotFoundException {
        PrintWriter writer = new PrintWriter(System.out);    
        writer= new PrintWriter(new File("abc.txt"));  
        writer.write("javascript is better than java");    
        writer.close();

    } 
}