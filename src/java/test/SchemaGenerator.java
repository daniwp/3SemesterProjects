package test;

import javax.persistence.Persistence;

public class SchemaGenerator {

    public static void main(String[] args) {
        Persistence.generateSchema("JPAExcersiceW4PU", null);
    }
}
