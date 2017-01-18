package rest;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entities.City;
import entities.Country;
import entities.PrettyCity;
import java.util.ArrayList;
import java.util.List;

public class JSONConverter {

    private Gson gson = new Gson();

    public String coutriesToJson(List<Country> countries) {
        List<JsonObject> pcountries = new ArrayList();

        for (Country c : countries) {

            JsonObject country = new JsonObject();

            if (c.getCode() != null) {
                country.addProperty("code", c.getCode());
            }
            if (c.getName() != null) {
                country.addProperty("name", c.getName());
            }
            if (c.getContinent() != null) {
                country.addProperty("continent", c.getContinent());
            }
            if (c.getCity() != null) {
                country.addProperty("cityName", c.getCity().getName());
            }

            pcountries.add(country);

        }

        return gson.toJson(pcountries);
    }

    public String citiesToJson(List<City> cities) {
        List<JsonObject> pcities = new ArrayList();

        for (City c : cities) {

            JsonObject city = new JsonObject();
            if (c.getName() != null) {
                city.addProperty("name", c.getName());
            }

            if (c.getPopulation() > 0) {
                city.addProperty("population", c.getPopulation());
            }

            pcities.add(city);
        }

        return gson.toJson(pcities);
    }

    public String cityToJson(City city) {
        return gson.toJson(new PrettyCity(city.getName(), city.getPopulation()));
    }

    public City jsonToCity(String content) {
        return gson.fromJson(content, City.class);
    }
}
