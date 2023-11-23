var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  AarthI. Now code is updated to Run to Version 2.0 after edit'); //write a response to the client
  res.end(); //end the response
}).listen(5009); //the server object listens on port 5008
