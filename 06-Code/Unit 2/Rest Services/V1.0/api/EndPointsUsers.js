const UsersController = require('../controller/Users')
const express = require('express')
const router = express.Router()


router.post('/',UsersController.createUser)
router.get('/', UsersController.getUsers)
router.put('/fix/:id',UsersController.updateUserId)
router.put('/:id',UsersController.updateUser)
router.get('/:id',UsersController.getUserById)
router.delete('/:id',UsersController.deleteUser)
router.get('/class/:mainClass',UsersController.getByClass)
router.get('/ranking/:id',UsersController.calculateRPoints)
router.get('/gifts/giveaway',UsersController.createMoneyGiveaway)
router.post('/services/:id',UsersController.changeFavoriteItem)
module.exports = router
