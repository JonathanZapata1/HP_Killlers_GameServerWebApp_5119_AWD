const ItemsController = require('../controller/Items')
const express = require('express')
const router = express.Router()

router.post('/',ItemsController.createItem)
router.get('/', ItemsController.getItems)
router.put('/:id',ItemsController.updateItem)
router.get('/:id',ItemsController.getItemById)
router.delete('/:id',ItemsController.deleteItem)

module.exports = router