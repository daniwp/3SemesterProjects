package rest;


import entities.City;
import entities.Country;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class CountryFacade {

    private EntityManagerFactory emf;

    public CountryFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<Country> getAll() {
        EntityManager em = getEntityManager();
        List<Country> countries = null;

        try {
            countries = em.createNamedQuery("Country.findAll").getResultList();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return countries;
    }

    public List<Country> getAllWithPopulation(int pop) {
        EntityManager em = getEntityManager();
        List<Country> countries = null;

        try {
            countries = em.createQuery("SELECT c FROM Country c WHERE c.population > :pop").setParameter("pop", pop).getResultList();

        } catch (Exception e) {
        } finally {
            em.close();
        }

        return countries;
    }

    public List<City> getCities(String countryCode) {
        EntityManager em = getEntityManager();
        List<City> cities = null;

        try {
            cities = em.createQuery("SELECT c FROM City c WHERE c.country.code = :cc").setParameter("cc", countryCode).getResultList();

        } catch (Exception e) {
        } finally {
            em.close();
        }

        return cities;
    }

    public City addCity(City city) {
        EntityManager em = getEntityManager();
        
        try {

            em.getTransaction().begin();
            em.persist(city);
            em.getTransaction().commit();

        } catch (Exception e) {
        } finally {
            em.close();
        }
        
        return city;
    }
}
