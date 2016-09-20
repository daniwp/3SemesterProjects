
import java.util.ArrayList;
import java.util.List;

public class People {
    
    private static List<Person> people = new ArrayList();
    
    public void addPerson(Person person) {
        people.add(person);
    }
    
    public List<Person> getPeople() {
        return people;
    }
}
