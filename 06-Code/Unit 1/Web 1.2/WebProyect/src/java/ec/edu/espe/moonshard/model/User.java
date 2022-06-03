/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.moonshard.model;

/**
 *
 * @author yepec
 */
public class User {
    private String id;
    private String username;
    private String password;
    private Character character;

    public User() {
    }

    public User(String id, String username, String password, Character character) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.character = character;
    }

    /**
     * @return the id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the character
     */
    public Character getCharacter() {
        return character;
    }

    /**
     * @param character the character to set
     */
    public void setCharacter(Character character) {
        this.character = character;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", username=" + username + ", password=" + password + ", character=" + character + '}';
    }
    
    
}
