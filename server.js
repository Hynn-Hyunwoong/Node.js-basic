const express = require('express')
const app = express()
const router = require('./routes')
const route = express.Router()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended:false }))
app.use(router)

app.use('/views',route)

app.get('/', (req,res)=>{
    res.render('index.html')
})

app.listen(3000,()=>{
    console.log('Fuckyou')
})


