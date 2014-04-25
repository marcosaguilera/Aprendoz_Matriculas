import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;


public class screenshot extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
 
    public screenshot() {
       super(INFO);
    }
    public String sampleJavaOperation() throws Exception {
    try{
    Robot robot = new Robot();
    BufferedImage screenShot = robot.createScreenCapture(new Rectangle(Toolkit.getDefaultToolkit().getScreenSize()));
    ImageIO.write(screenShot, "JPG", new File("screenShot.jpg"));
    
    }catch(Exception e) {
      System.err.println("Someone call a doctor!");
    }
    
    return "";
    }
    
   }
   