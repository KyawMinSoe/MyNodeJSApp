var connect = require('connect');
var url = require('url');
var app = new connect()

function sayHello(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.write('write first chunk. ')
    res.write('write second chunk. ')
    res.end('Hello Connect')
}

function loggingMiddleware(req,res,next){
    console.log("The request method is : "+ req.method)
    console.log('The request url is : ' + req.url)
    var queryData = url.parse(req.url,true).query
    console.log('The query parameter are : '+ queryData.name)
    next()
}

app
.use(loggingMiddleware)
.use(sayHello)
.listen(3031)

console.log("server is listening")