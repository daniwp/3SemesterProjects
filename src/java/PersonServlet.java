/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Daniel
 */
@WebServlet(urlPatterns = {"/person"})
public class PersonServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Person> people = new People().getPeople();

        if (people.isEmpty()) {
            Person p1 = new Person("Daniel", "Winkel", 22);
            Person p2 = new Person("Emil", "Pedersen", 22);
            Person p3 = new Person("Johan", "Narby", 16);
            Person p4 = new Person("Mohammed", "Jihad", 6);
            Person p5 = new Person("Selena", "Gomez", 22);
            Person p6 = new Person("John", "Doe", 53);
            Person p7 = new Person("Abdul", "Sulle", 32);

            people.add(p1);
            people.add(p2);
            people.add(p3);
            people.add(p4);
            people.add(p5);
            people.add(p6);
            people.add(p7);
        }

        int n = (int) (Math.random() * people.size() - 1);

        ServletOutputStream out = response.getOutputStream();
        out.print(new Gson().toJson(people.get(n)));
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
