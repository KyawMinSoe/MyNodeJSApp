var fs = require('fs');

function callmeafter2sec()
{
    console.log("function called @timeout for exercise");
    fs.appendFile('Exercisefile.txt', 'Exercise Content \n', function(err){
        if(err) throw err;
    
        console.log('Saved!');
    })
}

setInterval(callmeafter2sec,2000);