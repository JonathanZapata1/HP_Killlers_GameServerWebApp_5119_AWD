<%-- 
    Document   : addUser
    Created on : 2 jun. 2022, 19:21:12
    Author     : yepec
--%>

<%@page import="ec.edu.espe.moonshard.controller.UserDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="user" class="ec.edu.espe.moonshard.model.User"></jsp:useBean>  
<jsp:setProperty property="*" name="user"/>  


<%  
    UserDao userDao = new UserDao();
    userDao.save(user);
    response.sendRedirect("addUserForm.jsp");
%>  
