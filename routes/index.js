const express = require('express')
const router = express.Router()
const board = require('./board.route')
const gallery = require('./gallery.route')
const notice = require('./notice.route')


router.use('/board', board)
router.use('/gallery', gallery)
router.use('/notice', notice)

 module.exports = router