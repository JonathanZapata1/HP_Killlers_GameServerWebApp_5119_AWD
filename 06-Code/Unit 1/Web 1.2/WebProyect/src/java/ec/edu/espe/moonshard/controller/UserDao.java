/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.moonshard.controller;

import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.moonshard.model.User;
import ec.edu.espe.moonshard.utils.MongoManager;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Response;
import org.bson.Document;

/**
 *
 * @author yepec
 */
public class UserDao {
    public static List<User> getAllRecords(){
        Gson gson = new Gson();
        ArrayList<String> userStringList = MongoManager.findAll("Moonshard","User");
        List<User> userList = new ArrayList<>();
        User user = new User();
        for(String stringUser : userStringList){
          user = gson.fromJson(stringUser,User.class);
          userList.add(user);
        }     
        return userList;      
    }
    
    public static boolean save(User user){
        
        Gson gson = new Gson();
        String stringUser = gson.toJson(user);
        boolean saved = false;
        try{
             MongoManager.save(stringUser,"Moonshard","User");
             saved = true;
        }catch(Exception e){
            System.out.println("Save Error..");
        }
       
        return saved;
    }
    
    public static Response edit(String id,User user){
        Gson gson = new Gson();
        if("null".equals(MongoManager.find(id,"Moonshard","User"))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        user.setId(id);
        String stringUser = gson.toJson(user);
        MongoManager.replace(id,stringUser,"Moonshard","User");
        return Response.status(Response.Status.OK).entity("Entity updated for ID: " + id ).build();
    }
    
    public static Response delete(User user){
        String id = user.getId();
        if("null".equals(MongoManager.find(id,"Moonshard","User"))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        MongoManager.delete(id,"Moonshard","User");
        return Response.status(Response.Status.OK).entity("Entity deleted for ID: " + id ).build();
    }
}
