package rest;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("allusers")
@RolesAllowed("Admin")
public class Admin {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomething() {
        return "[{\"name\": \"Jan\",\"mail\":\"jan@a.dk\"},{\"name\":\"Ann\",\"mail\":\"ann@a.dk\"},{\"name\":\"ib\",\"mail\":\"ib@a.dk\"}]";
    }
}
