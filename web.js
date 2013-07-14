var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffer = new Buffer(128);
//var content = fs.readFileSync ("/home/ubuntu/hw4/node-js-sample/bitstarter/index.html" ); 
  
app.get('/', function(request, response) {
  response.send(fs.readFileSync("./index.html").toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  //console.log(buffer.toString('ascii'));
  console.log(fs.readFileSync("./index.html").toString());
});
  
