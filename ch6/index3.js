var http = require('http');
var employeeService = require('./lib/employees');


http.createServer(function (req, res) {
	//a parsed url to with in case there are parameters
	var _url;

	//In case the client uses lower case for methods
	req.method = req.method.toUpperCase();
	console.log(req.method + ' ' + req.url);
	
	if (req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type': 'text/plain'
		});
		return res.end(req.method + ' is not implemented by this server.');
	}
	
	if (_url = /^\/employees$/i.exec(req.url)) {
		//return a list of employees
        employeeService.getEmployees(function (error, data) {
            if (error) {
                //send a 500 error
            }
            //send the data with a 200 status code
        });
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        //find the employee by the id in the route
        employeeService.getEmployee(_url[1], function (error, data) {
            if (error) {
                //send a 500 error
            }
            
            if (!data) {
                //send a 404 error
            }
            
            // send the data with a 200 status code
        });
    } else {
        //try to send the static file if it exists,
        //if not, send a 404
    }
}).listen(1337, '127.0.0.1');
        
console.log('Server running at http://127.0.0.1:1337/');
