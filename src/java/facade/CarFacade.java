package facade;

import entity.Car;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class CarFacade {

    EntityManagerFactory emf;

    public CarFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<Car> getAll() {
        EntityManager em = getEntityManager();
        List<Car> cars = new ArrayList();

        try {
            cars = em.createQuery("SELECT c FROM Car c", Car.class).getResultList();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return cars;
    }

    public Car getCar(long id) {
        EntityManager em = getEntityManager();
        Car car = null;

        try {
            car = em.find(Car.class, id);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return car;
    }

    public Car editCar(Car car) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();

            em.merge(car);

            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return car;
    }

    public Car addCar(Car car) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();

            em.persist(car);

            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return car;
    }

    public Car removeCar(long id) {
        EntityManager em = getEntityManager();
        Car car = null;

        try {
            em.getTransaction().begin();

            car = em.find(Car.class, id);

            em.remove(car);

            em.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return car;
    }

}
