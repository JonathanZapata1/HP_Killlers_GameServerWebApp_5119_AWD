<%-- 
    Document   : addUserForm
    Created on : 2 jun. 2022, 20:58:50
    Author     : yepec
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
       <header>
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="nav-item m-2" href="views/addTruckForm.jsp">Join our Community</a>  
            <a class="nav-item m-2"  href="index.jsp">View Users</a>   
               </nav>          
            </div>
        </header> 
        <section>
            <div class="container">
                <h1>Add Truck</h1>    
                <form action="addTruck.jsp" method="post">
                    <div class="grid"> 
                        <div class="row p-2">
                            <label>ID:</label>
                            <input type="number" name="id">
                        </div>
                        <div class="row p-2">
                            <label>Name: </label>
                            <input type="text" name="name">
                        </div>
                        <div class="row p-2">
                            <label>Brand: </label>
                            <input type="text" name="brand">
                        </div>
                        <div class="row p-2">
                            <label>Primary Color: </label>
                            <input type="text" name="primaryColor">
                        </div>
                        <div class="row p-2">
                            <label>Secondary Color: </label>
                            <input type="text" name="secondaryColor">
                        </div>
                        <div class="row p-2">
                            <label>Year Of Realease: </label>
                            <input type="number" name="yearOfRealease">
                        </div>
                        <div class="row p-2">
                            <label>Price: </label>
                            <input type="text" name="price">
                        </div>
                        <div class="row p-2">
                            <label>Is Available: </label>
                            <input type="text" name="isAvailable">
                        </div>
                        <div class="row p-2">
                            <input type="submit" value="Add Truck"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </body>
</html>
