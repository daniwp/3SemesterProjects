package deadlock_philosophers;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DeadLockDetector extends Thread {

    ThreadMXBean bean = ManagementFactory.getThreadMXBean();

    public void run() {
        while (true) {
            long[] threadIds = bean.findDeadlockedThreads();
            if (threadIds != null) {
                System.out.println("EXIT!");
                System.out.println(threadIds);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ex) { }
                System.exit(1);
            }
        }
    }
}
