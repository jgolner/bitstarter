var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffer = new Buffer(128);
  
app.get('/', function(request, response) {
  response.send(fs.readFileSync("./index.html").toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(fs.readFileSync("./index.html").toString());
});
  
