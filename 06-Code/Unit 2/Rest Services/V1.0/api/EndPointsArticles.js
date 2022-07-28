const ArticlesController = require('../controller/Articles')
const express = require('express')
const router = express.Router()


router.post('/',ArticlesController.createArticle)
router.get('/', ArticlesController.getArticles)
router.get('/:id',ArticlesController.getArticleById)
router.put('/fix/:id',ArticlesController.updateArticleId)
router.put('/:id',ArticlesController.updateArticle)
router.delete('/:id',ArticlesController.deleteArticle)

module.exports = router
