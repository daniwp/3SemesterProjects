
import javax.persistence.Persistence;

/**
 *
 * @author danie
 */
public class SchemaGenerator {

    public static void main(String[] args) {
        Persistence.generateSchema("JPA_Exam_Prep_1PU", null);
    }
}
