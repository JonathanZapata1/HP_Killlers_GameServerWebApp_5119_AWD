/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.moonshard.utils;

/**
 *
 * @author Christopher Yépez 
 */
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import java.util.ArrayList;
import org.bson.Document;

public class MongoManager{  
    public static boolean save(String data,String databaseName,String collectionName){
        MongoClientURI uri = new MongoClientURI(
        "mongodb+srv://admin:admin@cluster0.g8ectx8.mongodb.net/?retryWrites=true&w=majority");    
        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase(databaseName);
        MongoCollection collection = database.getCollection(collectionName);
        Document objectRegistry = null;
        boolean saved = false;
        try{
            objectRegistry = Document.parse(data);  
            saved = true;
        }
        catch(Exception e){
            saved = false;
        }
        collection.insertOne(objectRegistry);
        mongoClient.close();   
        return saved;
    }
    public static ArrayList<String> findAll(String databaseName,String collectionName){
        try {
        MongoClientURI uri = new MongoClientURI(
        "mongodb+srv://admin:admin@cluster0.g8ectx8.mongodb.net/?retryWrites=true&w=majority"); 
        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase(databaseName);
        MongoCollection<Document> collection = database.getCollection(collectionName);
        ArrayList<String> stringList = new ArrayList<>();
        ArrayList<Document> objectDList = new ArrayList<>();
        objectDList = collection.find().into(new ArrayList<>());
        for (Document object : objectDList) {
            String objectString = object.toJson();
            stringList.add(objectString);
        }
        return stringList;
        }                       
        catch (Exception e){
            System.out.println("Find Error..");
            return null;
        } 
    }
    public static String find(String idToFind,String databaseName,String collectionName){
        try {
            MongoClientURI uri = new MongoClientURI(
            "mongodb+srv://admin:admin@cluster0.g8ectx8.mongodb.net/?retryWrites=true&w=majority"); 
            MongoClient mongoClient = new MongoClient(uri);
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection collection = database.getCollection(collectionName);
            Document found = (Document) collection.find(Filters.eq("id",idToFind)).first();
            if(found!=null){
                System.out.println("Successful");  
                mongoClient.close();
                return (found.toJson());
            }
            System.out.println("Not Found");
            mongoClient.close();   
            return "null";
        }
        catch (Exception e){
            System.out.println("Find Error..");
            return "null";
        }  
    }
    public static boolean replace(String idToReplace,String data,String databaseName,String collectionName){
        try {
            MongoClientURI uri = new MongoClientURI(
            "mongodb+srv://admin:admin@cluster0.g8ectx8.mongodb.net/?retryWrites=true&w=majority"); 
            MongoClient mongoClient = new MongoClient(uri);
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);
            Document objectRegistry;
            objectRegistry = collection.find().filter(Filters.eq("id",idToReplace)).first();
            Document updateRegistry;
            updateRegistry = Document.parse(data);
            collection.replaceOne(objectRegistry, updateRegistry);
            return true;
        }
        catch (Exception e){
            System.out.println("Update Error..");
            return false;
        }  
    }
    
    public static boolean delete(String idToDelete,String databaseName,String collectionName){
        try {
            MongoClientURI uri = new MongoClientURI(
            "mongodb+srv://admin:admin@cluster0.g8ectx8.mongodb.net/?retryWrites=true&w=majority"); 
            MongoClient mongoClient = new MongoClient(uri);
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection collection = database.getCollection(collectionName);
            try{
            collection.deleteOne(Filters.eq("id",idToDelete)); 
            mongoClient.close();                
            return true; 
            }
            catch(Exception e){
                System.out.println("Delete Error");
                return false;
            }
            
        }
        catch (Exception e){
            System.out.println("Delete Error..");
            return false;
        }  
    }
}

