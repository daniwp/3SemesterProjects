package imgretriever;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class ImageThread extends Thread {

    private int totalBytes;

    public ImageThread(String url) throws IOException {
        for (byte b : getBytesFromUrl(url)) {
            totalBytes += b;
        }
    }

    public static byte[] getBytesFromUrl(String url) throws IOException {
        URLConnection connection = new URL(url).openConnection();
        connection.setRequestProperty("User-Agent", "Mozilla/5.0");
        connection.connect();
        ByteArrayOutputStream bis = new ByteArrayOutputStream();
        try {
            InputStream is = connection.getInputStream();
            byte[] bytebuff = new byte[4096];
            int read;
            while ((read = is.read(bytebuff)) > 0) {
                bis.write(bytebuff, 0, read);
            }
        } catch (IOException ex) {
            System.out.println(ex);
        }
        return bis.toByteArray();
    }
    
    public int getByteSize() {
        return totalBytes;
    }
}
