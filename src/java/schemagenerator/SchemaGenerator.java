package schemagenerator;

import javax.persistence.Persistence;

public class SchemaGenerator {

    public static void main(String[] args) {
        Persistence.generateSchema("CarExPU", null);
    }
}
