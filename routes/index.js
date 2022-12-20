const express = require('express')
const router = express.Router()
const list = require('/list')
const modify = require('/modify')
const view = require('/view')
const write = require('/write')

router.use('/list', list)
router.use('/modify', modify)
router.use('/view', view)
router.use('/write', write)

module.exports = router
