const express = require('express')
const app = express()
const router = require('router')
const nunjucks = require('nunjucks')
const router = require('routes')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended:false }))
app.use(router)


app.listen(3000,()=>{
    console.log('Fuckyou')
})


