const { application } = require('express')
const express = require('express')
const router = express.Router()
const contoller = require("../controllers/board.controller")

router.get("/list", (req,res)=>{
    res.render("notice/list.html")
})

router.get("/write", (req,res)=>{
    res.render("notice/write.html")
})

router.post("/write", (req,res)=>{
    res.redirect("/notice/view")
})

router.get("/view", (req,res)=>{
    res.render("notice/view.html")
})

router.get('/delete', (req,res) => {
    const {index} = req.body
    items.splice(index,1)
    res.redirect("/list")
})

module.exports = router