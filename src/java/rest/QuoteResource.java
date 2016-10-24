/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Quote;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

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

    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRandom() {
        int key = new Random().nextInt(quotes.size()) + 1;
        return Response.status(Status.OK).entity(gson.toJson(new Quote(key, quotes.get(key)))).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {

//        if (quotes.get(id) == null) {
//            return Response.status(Status.NOT_FOUND).build();
//        }
        return Response.status(Status.OK).entity(gson.toJson(quotes.get(id))).build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response add(String quote) {
        int id = quotes.size() + 1;
        quotes.put(id, quote);
        return Response.status(Status.OK).entity(gson.toJson(new Quote(id, quotes.get(id)))).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(@PathParam("id") int id, String quote) {
        String qq = quote;
        String q = gson.fromJson(quote, Quote.class).getQuote();
        quotes.put(id, q);
        return Response.status(Status.OK).entity(gson.toJson(new Quote(id, quotes.get(id)))).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") int id) {
        Quote quote = new Quote(id, quotes.get(id));
        if (quotes.get(id).isEmpty()) {
            return Response.status(Status.NOT_FOUND).build();
        }
        quotes.remove(id, quotes.get(id));
        return Response.status(Status.OK).entity(gson.toJson(quote)).build();
    }
}
