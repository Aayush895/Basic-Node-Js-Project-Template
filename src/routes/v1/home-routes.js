const express = require('express')
const router = express.Router()
const { home } = require('../../controllers')

router.get('/', home.getReqController)
router.post('/', home.postReqController)

module.exports = router
