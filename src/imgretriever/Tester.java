package imgretriever;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Tester {

    public static void main(String[] args) {
        try {
            ImageThread imgThread1 = new ImageThread("https://fronter.com/cphbusiness/design_images/images.php/Classic/login/fronter_big-logo.png");
            ImageThread imgThread2 = new ImageThread("https://fronter.com/cphbusiness/design_images/images.php/Classic/login/folder-image-transp.png");
            ImageThread imgThread3 = new ImageThread("https://fronter.com/volY12-cache/cache/img/design_images/Classic/other_images/button_bg.png");
            
            imgThread1.run();
            imgThread2.run();
            imgThread3.run();
            
            System.out.println(imgThread1.getByteSize() + imgThread2.getByteSize() + imgThread3.getByteSize());
            
        } catch (IOException ex) {
            
        }
    }
    
}
