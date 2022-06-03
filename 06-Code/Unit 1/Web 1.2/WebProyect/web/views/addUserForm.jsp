<%-- 
    Document   : addUserForm
    Created on : 2 jun. 2022, 20:58:50
    Author     : yepec
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> 
         <link rel="stylesheet" href="../style.css">
        <title>MoonShard-Wow</title>
            <link rel="icon" 
      type="favicon/ico" 
      href="../favicon.ico">
    <body>
    <header>               
            <nav class="moonshard-navbar navbar navbar-expand-lg navbar-dark justify-content-between">
                <img src="../img/wow-logo.png" width="120" height="80" class="" alt="">
                <a class="nav-brand nav-item nav-link " href="../index.jsp">  MoonShard - WOW <a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mr-sm-2">
                        <a class="nav-item nav-link" href="addUserForm.jsp"> Join our Community</a>
                        <a class="nav-item nav-link" href="viewUsers.jsp">View Actual Users</a>
                        <a class="nav-item nav-link" href="news.jsp">News</a>
                        <a class="nav-item nav-link" href="about.jsp">About</a>
                    </div>
                </div>  
            </nav>
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
