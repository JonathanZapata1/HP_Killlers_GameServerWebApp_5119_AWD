/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.moonshard.model;

/**
 *
 * @author yepec
 */
public class Character {
    private String characterId;
    private String characterName;
    private String characterClass;
    private String description;
    private String weapon;
    private int level;
    private boolean active;

    public Character() {
    }

    public Character(String characterId, String characterName, String characterClass, String description, String weapon, int level, boolean active) {
        this.characterId = characterId;
        this.characterName = characterName;
        this.characterClass = characterClass;
        this.description = description;
        this.weapon = weapon;
        this.level = level;
        this.active = active;
    }
  
    /**
     * @return the characterName
     */
    public String getCharacterName() {
        return characterName;
    }

    /**
     * @param characterName the characterName to set
     */
    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    /**
     * @return the characterClass
     */
    public String getCharacterClass() {
        return characterClass;
    }

    /**
     * @param characterClass the characterClass to set
     */
    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the weapon
     */
    public String getWeapon() {
        return weapon;
    }

    /**
     * @param weapon the weapon to set
     */
    public void setWeapon(String weapon) {
        this.weapon = weapon;
    }

    /**
     * @return the level
     */
    public int getLevel() {
        return level;
    }

    /**
     * @param level the level to set
     */
    public void setLevel(int level) {
        this.level = level;
    }

    /**
     * @return the active
     */
    public boolean isActive() {
        return active;
    }

    /**
     * @param active the active to set
     */
    public void setActive(boolean active) {
        this.active = active;
    }    

    @Override
    public String toString() {
        return "Character{" + "characterId=" + characterId + ", characterName=" + characterName + ", characterClass=" + characterClass + ", description=" + description + ", weapon=" + weapon + ", level=" + level + ", active=" + active + '}';
    }
    
}
