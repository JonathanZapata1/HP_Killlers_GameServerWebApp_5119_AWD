const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    id : {type: Number},
    name : {type:String},
    userName : {type: String},
    email: {type: String},
    gameName: {type: String},
    mainClass: {type: String},
    timePlayed: {type: Number},
    isActive: {type: Boolean},
    pointsObtained: {type:Number},
    accountMoney:{type:Number},
    lastTimeVisited:{type:Date},
    spendedMoney:{type:Number},
    favoriteItem:{type:String}
})

module.exports = User = mongoose.model('User',UserSchema)