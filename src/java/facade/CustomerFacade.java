package facade;

import entity.Customer;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class CustomerFacade {

    EntityManagerFactory emf;

    public CustomerFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Customer getCustomer(int id) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            return em.find(Customer.class, id);
        } finally {
            em.close();
        }
    }

    public List<Customer> getCustomers() {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            Query query = em.createQuery("SELECT c FROM Customer c");
            return (List<Customer>) query.getResultList();
        } finally {
            em.close();
        }
    }

    public void addCustomer(Customer cust) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            em.persist(cust);
            em.flush();
            System.out.println(cust.getId());
        } finally {
            em.close();
        }
    }

    public Customer deleteCustomer(int id) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            em.remove(id);
            em.flush();
            return em.find(Customer.class, id);
        } finally {
            em.close();
        }
    }

    public Customer editCustomer(Customer cust) {
        EntityManager em = getEntityManager();

        try {
            em.getTransaction().begin();
            em.persist(cust);
            em.flush();
            return cust;
        } finally {
            em.close();
        }
    }
}
