var protocol = require("http");

protocol.createServer(function (request, response)
{
    response.writeHead(200,{'conten-type':'text/html'});
    response.end("Hello first node app....");
}
).listen(8000);