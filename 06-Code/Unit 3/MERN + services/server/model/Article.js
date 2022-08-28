const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
    id : {type: Number},
    name : {type:String},
    author : {type: String},
    date : {type: Date },
    content: {type : String },
    subject:{ type : String }
})

module.exports = Article = mongoose.model('Article',ArticleSchema)