const Article = require('../model/Article')

const createArticle = (req,res) =>{
    let article = new Article({
        id :req.body.id,
        name: req.body.name,
        author: req.body.author,
        date : req.body.date,
        content : req.body.content,
        subject : req.body.subject
    })
    article.save((err, cli) => {
        err && res.status(500).json(err.message)
        res.status(200).json(cli)
    })
}

const getArticles = (req,res) => {
    Article.find((err,articles) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(articles)
    })
}

const getArticleById = (req,res) =>{
    
    try{
        Article.findOne({id: req.params.id }, (err,article) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(article)
        })
    }catch(error){
        res.status(404).send({Error : "Article not found"})
    }

}

const updateArticleId = (req,res) =>{
try{
    Article.findOneAndUpdate({id : req.params.id},
         {id : req.body.id}, (err,cli) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(`New id of ${req.params.id} : ${req.body.id} `)
        })
    }catch(error){
        res.status(404).send({Error : "Article not found"})
    }   
}

const updateArticle = async (req,res) =>{
    try{
        const article = await Article.findOne({id : req.params.id})
        if(req.body.name){
            article.name = req.body.name;
        }
        if(req.body.author){
            article.author= req.body.author
        }
        if(req.body.date){
            article.date = req.body.date
        }
        if(req.body.content){
            article.content = req.body.content
        }
        if(req.body.subject){
            article.subject = req.body.subject
        }
        await article.save()
		res.send(article)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "Article not found"})
        }   
    }

const deleteArticle = (req,res) => {
    Article.findOneAndDelete({id: req.params.id},(err, cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}




module.exports = {createArticle,getArticles,  getArticleById, updateArticleId,updateArticle, deleteArticle}