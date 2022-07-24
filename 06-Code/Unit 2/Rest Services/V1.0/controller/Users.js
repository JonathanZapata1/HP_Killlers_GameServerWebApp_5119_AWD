const User = require('../model/User')

const createUser = async (req,res) =>{
    if (await User.findOne({id: req.body.id })!==null){
        res.status(400).send({Error : "User Already Exists"})
    }
    else{
        let user = new User({
            id :req.body.id,
            name: req.body.name,
            userName :req.body.userName,
            email: req.body.email,
            gameName:req.body.gameName,
            mainClass: req.body.mainClass,
            timePlayed: req.body.timePlayed,
            isActive: req.body.isActive,
            pointsObtained: req.body.pointsObtained,
            accountMoney:req.body.accountMoney,
            lastTimeVisited:req.body.lastTimeVisited,
            spendedMoney:req.body.spendedMoney,
            favoriteItem:req.body.favoriteItem
        })
    
        await user.save((err, cli) => {
            err && res.status(500).json(err.message)
            res.status(200).send(cli)
        })
    }   
}

const getUsers = (req,res) => {
    User.find((err,users) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(users)
    })
}
const getUserById = (req,res) =>{
    try{
        User.findOne({id: req.params.id }, (err,user) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(user)
        })
    }catch(error){
        res.status(404).send({Error : "User not found"})
    }

}
const updateUserId = (req,res) =>{
try{
    User.findOneAndUpdate({id : req.params.id},
         { id : req.body.id}, (err,cli) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(`New id of ${req.params.id} : ${req.body.id} `)
        })
    }catch(error){
        res.status(404).send({Error : "User not found"})
    }   
}

const updateUser = async (req,res) =>{
    try{
        const user = await User.findOne({id : req.params.id})
        if(req.body.userName){
            user.userName = req.body.userName;
        }
        if(req.body.email){
            user.email = req.body.email
        }
        if(req.body.gameName){
            user.gameName = req.body.gameName
        }
        if(req.body.mainClass){
            user.mainClass = req.body.mainClass
        }
        if(req.body.timePlayed){
            user.timePlayed = req.body.timePlayed
        }
        if(req.body.isActive){
            user.isActive = req.body.isActive
        }
        if(req.body.pointsObtained){
            user.pointsObtained = req.body.pointsObtained
        }
        if(req.body.accountMoney){
            user.accountMoney = req.body.accountMoney
        }
        if(req.body.lastTimeVisited){
            user.lastTimeVisited = req.body.lastTimeVisited
        }
        if(req.body.spendedMoney){
            user.spendedMoney = req.body.spendedMoney
        }
        if(req.body.favoriteItem){
            user.favoriteItem = req.body.favoriteItem
        }
        await user.save()
		res.send(user)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
    }

const deleteUser = (req,res) => {
    User.findOneAndDelete({id: req.params.id},(err, cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}

const getByClass = async  (req,res)=>{
    const users = await User.find()
    let classUsers = [];
    for(let user of users){
        console.log(user)
        if(user.mainClass === req.params.mainClass)
            classUsers.push(user)
    }
    res.send(classUsers)
    }

const calculateRPoints = async (req,res) => {
    let rankingPoints = 0;
    // Ranking Points of the server is calculated by the time played + points obtained + spendedMoney
    try{
        const user = await User.findOne({id : req.params.id})
        rankingPoints += user.pointsObtained;
        rankingPoints += user.timePlayed * 500;
        rankingPoints += user.spendedMoney * 2; 
        console.log(rankingPoints);
        res.status(200).send(
            {id : user.id, username: user.userName, points : user.pointsObtained, rankingPoints : rankingPoints })
    }
    catch(error){
        console.log(error)
        res.status(404).send({Error : "User not found"})
    }
}

const createMoneyGiveaway = async (req,res) => {
    //giveaway to the active users, giving 50 more money to one random.
    try{
        const users = await User.find()
        let giveawayUsers = [];
        for(let user of users){
            if(user.isActive === true && user.timePlayed >= 10)
            giveawayUsers.push(user)
        }
        const randomUser = Math.floor(Math.random() * giveawayUsers.length);
        const winnerUser = giveawayUsers[randomUser];
        winnerUser.accountMoney += 151;
        await  winnerUser.save()
        res.status(200).send(
            {id :  winnerUser.id, username:  winnerUser.userName, accountMoney :  winnerUser.accountMoney })
    }
    catch(error){
        console.log(error)
        res.status(404).send({Error : "User not found"})
        
    }
}

const changeFavoriteItem = async (req,res) => {
    // to change your favorite item, you have to spend 5000 points
    try{
        const user = await User.findOne({id : req.params.id})
        if (user.pointsObtained < 5000){
            res.send({message: "Not enough points"})
            return
        }
        user.pointsObtained -=5000;
        user.favoriteItem = req.body.favoriteItem;
        await  user.save();
        res.status(200).send(user)
    }
    catch(error){
        console.log(error)
        res.status(404).send({Error : "User not found"})
        
    }
}
module.exports = {createUser, getUsers, getUserById, updateUserId, updateUser,deleteUser,getByClass,calculateRPoints,createMoneyGiveaway,changeFavoriteItem}