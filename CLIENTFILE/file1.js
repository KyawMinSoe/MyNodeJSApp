var filesystem1 = require('fs');
var datatowrite = 'hello i am writing some data to file';

var stream1 = filesystem1.createWriteStream("out.txt");
stream1.write(datatowrite,'utf-8');
stream1.end();

stream1.on('finish',function(){
    console.log("data written");
});

console.log("stream closed and data written");