/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import facade.PersonFacade;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import jsonconverter.JSONConverter;

/**
 * REST Web Service
 *
 * @author Daniel
 */
@Path("/person")
public class PersonResource {

    PersonFacade pf = new PersonFacade(Persistence.createEntityManagerFactory("RESTExerciseDay1Del2PU", null));

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PersonResource
     */
    public PersonResource() {
    }

    /**
     * Retrieves representation of an instance of entity.PersonResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        return Response.status(Status.OK).entity(JSONConverter.getJSONFromPersons(pf.getPersons())).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        return Response.status(Status.OK).entity(JSONConverter.getJSONFromPerson(pf.getPerson(id))).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response add(String content) {
        return Response.status(Status.OK).entity(pf.addPerson(JSONConverter.getPersonFromJson(content))).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(String content) {
        return Response.status(Status.OK).entity(JSONConverter.getJSONFromPerson(pf.editPerson(JSONConverter.getPersonFromJson(content)))).build();
    }
    
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response delete(@PathParam("id") int id) {
        return Response.status(Status.OK).entity(JSONConverter.getJSONFromPerson(pf.deletePerson(id))).build();
    }
}
