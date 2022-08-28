const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ItemSchema = new Schema({
    id : {type: Number},
    itemName : {type:String},
    category : {type: String},
    rarity: {type: String},
    price: {type: Number},
    isAvailable: {type:Boolean}
})

module.exports = Item = mongoose.model('Item',ItemSchema)