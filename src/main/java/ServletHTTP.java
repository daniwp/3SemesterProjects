/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Daniel
 */
@WebServlet(urlPatterns = {"/ServletHTTP"})
public class ServletHTTP extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ServletHTTP</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<table style='width: 600px;' border = solid black 3px;>\n"
                    + "<tbody>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>&nbsp;Header</td>\n"
                    + "<td style='width: 231px;'>Value</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>&nbsp;host</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("host") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>&nbsp;connection</td>\n"
                    + "<td style='width: 231px;'> " + request.getHeader("connection") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>cachecontrol&nbsp;</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("cachecontrol") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>accept&nbsp;</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("accept") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>user-agent&nbsp;</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("user-agent") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>accept-encoding&nbsp;</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("accept-encoding") + "</td>\n"
                    + "</tr>\n"
                    + "<tr>\n"
                    + "<td style='width: 74px;'>accept-language&nbsp;</td>\n"
                    + "<td style='width: 231px;'>" + request.getHeader("accept-language") + "</td>\n"
                    + "</tr>\n"
                    + "</tbody>\n"
                    + "</table>");
            out.println("</body>");
            out.println("</html>");
        }
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
