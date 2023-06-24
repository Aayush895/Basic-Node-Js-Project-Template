const express = require('express')
const router = express.Router()

const {userController} = require('../../controllers')

router.post('/create', userController.createUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/getuser/:id', userController.getUserById);
router.get('/getallusers',userController.getAllUsers);

module.exports = router