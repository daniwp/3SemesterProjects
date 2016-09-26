/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import entity.Quote;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 * REST Web Service
 *
 * @author danie
 */
@Path("/quote")
public class QuoteResource {

    private static Map<Integer, String> quotes = new HashMap() {
        {
            put(1, "Friends are kisses blown to us by angels");
            put(2, "Do not take life too seriously. You will never get out of it alive");
            put(3, "Behind every great man, is a woman rolling her eyes");
        }
    };

    private static Gson gson = new GsonBuilder().setPrettyPrinting().setFieldNamingPolicy(FieldNamingPolicy.IDENTITY).create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of QuoteResource
     */
    public QuoteResource() {
    }

    /**
     * Retrieves representation of an instance of rest.QuoteResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getQuote(@PathParam("id") int id) {
        return Response.status(Status.OK).entity(gson.toJson(quotes.get(id))).build();
    }

    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRandomQuote() {
        int key = new Random().nextInt(quotes.size()) + 1;
        return Response.status(Status.OK).entity(gson.toJson(quotes.get(key))).build();
    }

    @POST
    @Path("/add")
    public Response addUser(
            @FormParam("quote") String quote) {
        int id = quotes.size() + 1;
        quotes.put(id, quote);
        return Response.status(Status.OK).entity(new Quote(id, quote)).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateQuote(
            @PathParam("id") int id,
            JsonObject quote) {
        quotes.put(id, quote.getAsString());
        return Response.status(Status.OK).entity(gson.toJson(new Quote(id, quotes.get(id)))).build();
    }
}
