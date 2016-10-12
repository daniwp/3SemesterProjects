/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Car;
import facade.CarFacade;
import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Daniel
 */
@Path("/car")
public class CarResource {

    Gson gson = new GsonBuilder().setPrettyPrinting().setFieldNamingPolicy(FieldNamingPolicy.IDENTITY).create();
    CarFacade cf = new CarFacade(Persistence.createEntityManagerFactory("CarEx3PU"));

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CarResource
     */
    public CarResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        return Response.ok().entity(gson.toJson(cf.getAll())).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") long id) {
        return Response.ok().entity(gson.toJson(cf.getCar(id))).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response add(String content) {
        return Response.ok().entity(gson.toJson(cf.addCar(gson.fromJson(content, Car.class)))).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response edit(String content) {
        return Response.ok().entity(gson.toJson(cf.editCar(gson.fromJson(content, Car.class)))).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response delete(@PathParam("id") long id) {
        return Response.ok().entity(gson.toJson(cf.removeCar(id))).build();
    }
}
