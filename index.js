var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  AarthI. Now code is updated to Run to Version 2.0 after edit'); 
  res.end(); //end the response
}).listen(5020); //the server object listens on port 5020
