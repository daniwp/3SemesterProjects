package rest;

import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/country")
public class CountryResource {
    
    
    
    
    @Context
    private UriInfo context;
    
    private CountryFacade cf = new CountryFacade(Persistence.createEntityManagerFactory("REST_Exercise_Exam_WorldPU", null));
    private JSONConverter jsonCon = new JSONConverter();
    
    /**
     * Creates a new instance of CountryResource
     */
    public CountryResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response all() {
        return Response.status(Status.OK).entity(jsonCon.coutriesToJson(cf.getAll())).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{pop}")
    public Response allWithPopulation(@PathParam("pop") int pop) {
        return Response.status(Status.OK).entity(jsonCon.coutriesToJson(cf.getAllWithPopulation(pop))).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/cities/{code}")
    public Response cities(@PathParam("code") String code) {
        return Response.status(Status.OK).entity(jsonCon.citiesToJson(cf.getCities(code))).build();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addCity(String content) {
        return Response.status(Status.OK).entity(jsonCon.cityToJson(cf.addCity(jsonCon.jsonToCity(content)))).build();
    }
}
