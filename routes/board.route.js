const { application } = require('express')
const express = require('express')
const router = express.Router()
const contoller = require("../controllers/board.controller")

router.get("/list",contoller.list)
router.get("/write", (req,res)=>{
    res.render("board/write.html")
})
router.post("/write", contoller.write)
router.get("/view", contoller.view)
router.get('/delete',contoller.delete)
router.get('/modify', contoller.modify)
router.post('/modify', contoller.modified)

module.exports = router