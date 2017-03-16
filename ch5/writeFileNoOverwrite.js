var fs = require('fs');
var data = '\nsome more file data';

fs.writeFile(__dirname + '/foo.txt', data, {
  flag: 'wx'  
},function(error) {
    if (error) {
        return console.error(error.message);
    }
});