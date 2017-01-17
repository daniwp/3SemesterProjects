package facade;

import entities.Project;
import entities.ProjectUser;
import entities.Task;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author danie
 */
public class EntityFacade {

    EntityManagerFactory emf;

    public EntityFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEM() {
        return emf.createEntityManager();
    }

    public <T> T createEntity(T entity) {
        EntityManager em = getEM();

        try {
            em.getTransaction().begin();
            em.persist(entity);
            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return entity;
    }

    public <T> T deleteEntity(T entity) {
        EntityManager em = getEM();

        try {
            em.getTransaction().begin();
            em.remove(entity);
            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return entity;
    }

    public <T> T editEntity(T entity) {
        EntityManager em = getEM();

        try {
            em.getTransaction().begin();
            em.merge(entity);
            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return entity;
    }

    public ProjectUser findUser(long id) {
        EntityManager em = getEM();
        ProjectUser projectUser = null;

        try {
            projectUser = em.find(ProjectUser.class, id);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return projectUser;
    }

    public List<ProjectUser> getUsers() {
        EntityManager em = getEM();
        List<ProjectUser> users = new ArrayList();

        try {
            users = (List) em.createQuery("SELECT u FROM ProjectUser u", ProjectUser.class);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return users;
    }

    public ProjectUser assignUserToProject(ProjectUser user, Project project) {
        EntityManager em = getEM();

        try {
            em.getTransaction().begin();
            project.addUser(user);
            user.addProject(project);
            em.persist(project);
            em.persist(user);
            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return user;
    }

    public Project findProject(long id) {
        EntityManager em = getEM();
        Project project = null;

        try {
            project = em.find(Project.class, id);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return project;
    }

    public Task createTaskAndAssignToProject(Task task, Project project) {
        EntityManager em = getEM();

        try {
            em.getTransaction().begin();
            project.addTask(task);
            task.setProject(project);
            em.persist(task);
            em.persist(project);
            em.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            em.close();
        }

        return task;
    }

}
