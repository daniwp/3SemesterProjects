package exercises;

/**
 *
 * @author Daniel
 */

public class ThreadExercise1 {
    private static boolean running = true;

    public static void main(String[] args) throws InterruptedException {

        Runnable task1 = () -> {
            int billionSum = 0;
            for (int i = 1; i <= 1000000000L; i++) {
                billionSum += i;
            }
            System.out.println(billionSum);
        };

        Runnable task2 = () -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    System.out.println(i);
                    Thread.sleep(2000);
                }
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        };

        Runnable task3 = () -> {
            int n = 10;
            while (running) {
                try {
                    System.out.println(n);
                    n++;
                    Thread.sleep(3000);
                } catch (InterruptedException ex) {
                    break;
                }
            }
        };

        new Thread(task1).start();
        new Thread(task2).start();
        new Thread(task3).start();

        Thread.sleep(10000);
        running = false;
    }

}
