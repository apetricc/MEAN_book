var fs = require('fs');

var promise = new Promise(function(resolve, reject) {
    fs.readFile('README2.txt', 'utf8', function(error, data) {
        if (error) {
            return reject(error);
        }
        
        resolve(data);
    });
});

promise.then(function(result) {
    console.log(result);
    return 'THE END!';
}).catch(function(error) {
    console.log("you got a problem buddy");
    console.error(error.message);
});