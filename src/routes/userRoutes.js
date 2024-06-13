const express = require('express')
const { getUsers, getUser, googleUser, updateUserRole, updateUserNickName } = require('../controllers/userControllers')

const router = express.Router()

router.get('/user/:_id', getUser)
router.get('/users/all', getUsers)
router.post('/googleUser', googleUser)
router.patch('/editUserNickName/:_id', updateUserNickName)
router.patch('/role/:_id', updateUserRole)

module.exports = router 