/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exception;

import com.google.gson.Gson;
import exception.PrettyExceptionJson;
import exception.QuoteException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author danie
 */
@Provider
public class QuoteNotFoundExceptionMapper implements ExceptionMapper<QuoteException> {

    @Override
    public Response toResponse(QuoteException e) {
        return Response.status(e.getCode()).entity(new Gson().toJson(new PrettyExceptionJson(e.getCode(), e.getMessage()))).type("application/json").build();
    }
}
