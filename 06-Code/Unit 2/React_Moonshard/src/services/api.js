import axios from "axios"
//const UsersURL= "http://localhost:5000/GameServer/users";

export const addUser = async(user) => {

    try{
        const response = await axios.post(`http://54.210.116.27:3005/GameServer/users`,
        {id: user.id,userName: user.userName,
            email :user.email,gameName: user.gameName,
        mainClass: user.mainClass, timePlayed: user.timePlayed,
    isActive: user.isActive, pointsObtained: user.pointsObtained,
accountMoney: user.accountMoney, lastTimeVisited: user.lastTimeVisited,
spendedMoney: user.spendedMoney, favoriteItem: user.favoriteItem })
    return response             
    }catch(error){
        console.log("Error with calling addUser: " + error);
    }
};


export const getRanking = async() => {
    try{
        const response = await axios.get(`http://localhost:3005/GameServer/users/ranking/status/all`);
        return response
    }
    catch(error){
        console.log(error)
    }
};

export const getUserById = async(id) => { 
    
        try {
            return await axios.get(`http://54.210.116.27:3005/GameServer/users/${id}`);    
        } catch (error) {
            console.log("Error while calling getUser: " + error);
        }
};