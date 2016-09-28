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
import exception.QuoteNotFoundExceptionMapper;
import exception.QuoteException;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
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
     * @param id
     * @return an instance of java.lang.String
     * @throws exception.QuoteException
     */
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) throws QuoteException {
        String q = quotes.get(id);
        
        if (q == null) {
            throw new QuoteException(404, "Quote with requested id not found");
        }
        
        return Response.status(Status.OK).entity(gson.toJson(q)).build();
    }

    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRandom() throws QuoteException {
        if (quotes.isEmpty()) {
            throw new QuoteException(404, "No Quotes Created yet");
        }
        
        int key = new Random().nextInt(quotes.size()) + 1;
        return Response.status(Status.OK).entity(gson.toJson(new Quote(key, quotes.get(key)))).build();
    }

    @POST
    @Path("/add")
    public Response add(@FormParam("quote") String quote) {
        int id = quotes.size() + 1;
        quotes.put(id, quote);
        return Response.status(Status.NO_CONTENT).entity(new Quote(id, quote)).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(@PathParam("id") int id, String quote) throws QuoteException {
        if (quotes.get(id) == null) {
            throw new QuoteException(404, "Quote with requested id not found");
        }
        
        String q = gson.fromJson(quote, Quote.class).getQuote();
        quotes.put(id, q);
        return Response.status(Status.OK).entity(gson.toJson(new Quote(id, quotes.get(id)))).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") int id) throws QuoteException {
        Quote quote = new Quote(id, quotes.get(id));
        if (quotes.get(id) == null) {
            throw new QuoteException(404, "Quote with requested id not found");
        }
        quotes.remove(id);
        return Response.status(Status.OK).entity(gson.toJson(quote)).build();
    }

}
