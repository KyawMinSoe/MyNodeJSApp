var http = require('http');

var option = {
    host :'localhost',
    port : '8085',
    path : '/index.html'
};

var callback = function(response){

    var body = '';

    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        console.log(body);
    });
}

http.request(option,callback).end();

