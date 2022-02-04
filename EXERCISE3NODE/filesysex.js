var fs = require('fs');

fs.appendFile('Exercisefile.txt', 'Exercise Content', function(err){
    if(err) throw err;

    console.log('Saved!');
})