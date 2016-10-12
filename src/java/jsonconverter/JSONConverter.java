package jsonconverter;

import com.google.gson.Gson;
import entity.Person;
import java.util.List;

public class JSONConverter {
    

    public static Person getPersonFromJson(String js) {
        return new Gson().fromJson(js, Person.class);
    }
    
    public static String getJSONFromPerson(Person p) {
        return new Gson().toJson(p);
    }
    
    public static String getJSONFromPersons(List<Person> persons) {
        return new Gson().toJson(persons);
    }
    
    
}
