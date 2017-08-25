var http = require('http');
var portNumber = 8000;

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write('{"title" : "Hello JSON web API", "text" : "Text fra min API"}');
    res.end();
    console.log('Server is running at port: ' + portNumber)
});

server.listen(process.env.PORT || portNumber);
