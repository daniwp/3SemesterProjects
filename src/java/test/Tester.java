package test;

import entity.Address;
import entity.Customer;
import enums.CustomerType;
import facade.CustomerFacade;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class Tester {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("JPAExcersiceW4PU");
        /*
        EntityManager em = emf.createEntityManager();

        Query query = em.createQuery("SELECT c FROM Customer c");
        List<Customer> customers = query.getResultList();

        em.getTransaction().begin();

        for (Customer c : customers) {
            c.setFirstName("Mo");
            c.setType(CustomerType.GOLD);
        }
        
        Customer c = new Customer("Daniel", "Winkel");
        Customer c1 = new Customer("Daniel1", "Winkel1");
        Address address1 = new Address("Fasanen1","Kokkeren1");
        
        em.persist(address1);
        
        address1.addCustomer(c);
        address1.addCustomer(c1);
        
        em.persist(address1);
        em.getTransaction().commit();

        em.close();
        emf.close();
         */
        
        CustomerFacade cf = new CustomerFacade(emf);
        Customer c3 = new Customer("Danny", "D21yna");
        Customer c4 = new Customer("Dan21ny", "D21yna");
        cf.addCustomer(c3);
        cf.addCustomer(c4);

    }
}
