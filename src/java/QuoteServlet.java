/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.util.ArrayList;
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
@WebServlet(urlPatterns = {"/quote"})
public class QuoteServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json;charset=UTF-8");
        ArrayList<Quote> quotes = new ArrayList();

        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you.", 0));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you1.", 1));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you2.", 2));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you3.", 3));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you4.", 4));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you5.", 5));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you6.", 6));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you7.", 7));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you8.", 8));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you9.", 9));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you10.", 10));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you11.", 11));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you12.", 12));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you13.", 13));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you14.", 14));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you15.", 15));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you16.", 16));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you17.", 17));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you18.", 18));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you19.", 19));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you20.", 20));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you21.", 21));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you22.", 22));
        quotes.add(new Quote("If you can't change the world, make sure the world doesn't change you23.", 23));

        Quote result = null;
        
        
        
        int currentHour = ZonedDateTime.now().getHour();
        
        for (Quote q : quotes) {
            System.out.println(q.getText());
            if (q.getHour() == currentHour) {
                result = q;
            }
        }

        ServletOutputStream out = response.getOutputStream();
        out.print(new Gson().toJson(result));

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
