<%-- 
    Document   : addUser
    Created on : 2 jun. 2022, 19:21:12
    Author     : yepec
--%>

<%@page import="ec.edu.espe.moonshard.model.User"%>
<%@page import="ec.edu.espe.moonshard.controller.UserDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="u" class="ec.edu.espe.moonshard.model.CompleteUser"></jsp:useBean>  
<jsp:setProperty property="*" name="u"/>  


<%  
    UserDao userDao = new UserDao();
    System.out.println(u.getId());
    System.out.println(u.getUsername());
    System.out.println(u.getPassword());
    System.out.println(u.getCharacterName());
    System.out.println(u.getId());
    System.out.println(u.getId());
    System.out.println(u.getId());
    System.out.println(u.getId());
    System.out.println(u.getId());
    
    User user = new User(u.getId(),u.getUsername(),u.getPassword(),u.getCharacterId(),u.getCharacterName(),u.getCharacterClass(),u.getDescription(),u.getWeapon(),u.getLevel(),u.isActive());      
    userDao.save(user);
    response.sendRedirect("addUserForm.jsp");
%>  
