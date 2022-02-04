var express = require('express')
var app = new express()
var port = process.env.PORT || 5555

var router = express.Router()

router.get('/',function(req,res){
    res.send(' home page loaded....!')
})

router.get('/about',function(req,res){
    res.send(' about page loaded...!')
})

app.use('/',router)

app.get('/sample', function(req,res){
    res.send('this is a sample!')
})

app.listen(port)
console.log('Magic Happend on Port ' + port)