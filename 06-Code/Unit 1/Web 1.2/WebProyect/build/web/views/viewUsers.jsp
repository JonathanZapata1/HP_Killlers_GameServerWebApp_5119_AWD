<%-- 
    Document   : viewUsers
    Created on : 2 jun. 2022, 19:21:25
    Author     : yepec
--%>

<%@page import="ec.edu.espe.moonshard.model.User"%>
<%@page import="ec.edu.espe.moonshard.controller.UserDao"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> 
        <title>MoonShard-Wow</title>
    </head>
    <body>
        <header>
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="nav-item m-2" href="views/addUserForm.jsp">Join our Community</a>  
            <a class="nav-item m-2"  href="index.jsp">View Users</a>   
               </nav>          
            </div>
        </header> 
        <section>
            <table class="table table-dark table-hover" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Character Name</th>
                        <th>Character Class</th>
                        <th>Character Description</th>
                        <th>Character Weapon</th>
                        <th>Level</th>
                        <th>Active</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <%  
         UserDao userDao = new UserDao();
        List<User> list = userDao.getAllRecords();      
        request.setAttribute("list",list);  
        %> 
                
                <tbody>
                    <c:forEach items="${list}" var="u">
                    <tr>
                        <td>${u.getId()}</td>
                        <td>${u.getUsername()}</td>
                        <td>${u.getCharacter().getCharacterName()}</td>
                        <td>${u.getCharacter().getCharacterClass()}</td>
                        <td>${u.getCharacter().getDescription()}</td>
                        <td>${u.getCharacter().getWeapon()}</td>
                        <td>${u.getCharacter().getLevel()}</td>
                        <td>${u.getCharacter().isActive()}</td>
                        <td><a href="editform.jsp?id=${u.getId()}">Edit</a></td>  
                        <td><a href="deleteUser.jsp?id=${u.getId()}">Delete</a></td></tr>  
                    </tr>
                    </c:forEach>  
                </tbody>
            </table>
        </section>
    </body>
</html>
