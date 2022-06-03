<%-- 
    Document   : deleteUser.jsp
    Created on : 2 jun. 2022, 21:10:04
    Author     : yepec
--%>

<%@page import="ec.edu.espe.moonshard.controller.UserDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="u" class="ec.edu.espe.moonshard.model.User"></jsp:useBean>  
<jsp:setProperty property="*" name="u"/>  
<%  
    UserDao.delete(u);  
    response.sendRedirect("viewUsers.jsp");  
%>  
