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
                <h1>Join Our Comunnity</h1>    
                <p> Upload your user and the character you use for this server</p>
                <p> Write correctly you account to link it with the data of the game </p>
                <form action="addUser.jsp" method="post">   
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">ID: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="your ID" name="id">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">User Name: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="your username" name="username">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Password: </label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="colFormLabel" placeholder="password" name="password">
                            </div>
                        </div>
                        <h3>Enter you Character</h3>
                        
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Character ID: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="character ID" name="characterId">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Character Name: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="your name" name="characterName">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Character Class: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="your class" name="characterClass">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Character Description: </label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="descriptionLabel" rows="3" name="description"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Weapon: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="your main weapon" name="weapon">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Level: </label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="colFormLabel" placeholder="the level of your account" name="level">
                            </div>
                        </div>
                        <div class="form-group row">
                             <label for="colFormLabel" class="col-sm-2 col-form-label">Still Active?: </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="colFormLabel" placeholder="true/false" name="active">
                            </div>
                        </div> 
                        <div class="form-group row btn">
                            <input type="submit" value="Add User"/>
                        </div>
                </form>
            </div>
        </section>
    </body>
</html>
