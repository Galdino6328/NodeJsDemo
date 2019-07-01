var fs = require('fs');

fs.open('mynewfile2.txt','w', function(err, fie){
    if (err) throw err;
    console.log('Saved!');
});