/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Daniel
 */
public class ThreadExercise2 {

    public static void main(String[] args) {

        Even even = new Even();

        Runnable task1 = () -> {
            synchronized (even) {
                for (int i = 0; i < 10; i++) {
                    System.out.println(even.next());
                }
            }
        };

        Runnable task2 = () -> {
            synchronized (even) {
                for (int i = 0; i < 10; i++) {
                    System.out.println(even.next());
                }
            }
        };

        /* 
        If we do not introduce synchronization we cannot garantee which order
        the numbers are outputted. The number 4 might be printet out before
        the number 2, as the threads are asynchronized.
        This is a very common problem when working with multithreading without
        synchronization, as the order of execution will seem "random" and be
        unpredictable.
         */
        
        new Thread(task1).start();
        new Thread(task2).start();
    }
}
