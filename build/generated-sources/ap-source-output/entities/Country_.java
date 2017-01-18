package entities;

import entities.City;
import entities.Countrylanguage;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2016-09-30T12:04:04")
@StaticMetamodel(Country.class)
public class Country_ { 

    public static volatile SingularAttribute<Country, String> continent;
    public static volatile SingularAttribute<Country, String> code2;
    public static volatile SingularAttribute<Country, String> code;
    public static volatile SingularAttribute<Country, Float> surfaceArea;
    public static volatile SingularAttribute<Country, City> city;
    public static volatile SingularAttribute<Country, String> governmentForm;
    public static volatile SingularAttribute<Country, Short> indepYear;
    public static volatile SingularAttribute<Country, Float> gnp;
    public static volatile CollectionAttribute<Country, City> cityCollection;
    public static volatile CollectionAttribute<Country, Countrylanguage> countrylanguageCollection;
    public static volatile SingularAttribute<Country, Float> gNPOld;
    public static volatile SingularAttribute<Country, Integer> population;
    public static volatile SingularAttribute<Country, Float> lifeExpectancy;
    public static volatile SingularAttribute<Country, String> localName;
    public static volatile SingularAttribute<Country, String> headOfState;
    public static volatile SingularAttribute<Country, String> name;
    public static volatile SingularAttribute<Country, String> region;

}