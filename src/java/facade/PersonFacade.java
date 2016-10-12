package facade;

import entity.Person;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class PersonFacade {

    private EntityManagerFactory emf;

    public PersonFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Person addPerson(Person p) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
        } finally {
            em.close();
        }

        return p;
    }

    public Person deletePerson(int id) {
        EntityManager em = getEntityManager();
        Person p = null;
        long ID = (long) id;

        try {
            em.getTransaction().begin();
            p = em.find(Person.class, ID);
            em.remove(p);
            em.getTransaction().commit();
        } finally {
            em.close();
        }

        return p;
    }

    public Person getPerson(int id) {
        EntityManager em = getEntityManager();
        long ID = (long) id;

        try {
            return em.find(Person.class, ID);
        } finally {
            em.close();
        }
    }

    public List<Person> getPersons() {
        EntityManager em = getEntityManager();
        List<Person> persons = new ArrayList();

        try {
            persons = em.createQuery("SELECT p FROM Person p").getResultList();
        } finally {
            em.close();
        }

        return persons;
    }
    
    public Person editPerson(Person p) {
        EntityManager em = getEntityManager();
        
        try {
            em.getTransaction().begin();
            em.merge(p);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        
        return p;
    }
}
