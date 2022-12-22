const express = require('express')
const router = express.Router()

router.get("/list", (req,res)=>{
    res.render("gallery/list.html")
})

router.get("/write", (req,res)=>{
    res.render("gallery/write.html")
})

router.post("/write", (req,res)=>{
    res.redirect("/gallery/view")
})

router.get("/view", (req,res)=>{
    res.render("gallery/view.html")
})

router.get("/delete", (req,res)=>{
    res.render("gallery/delete.html")
})

module.exports = router