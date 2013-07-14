var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(50);

var content = fs.readFileSync ("index.html", "utf8"); 
 
app.get('/', function(request, response) {
  response.send(buffer.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(buffer.toString());
});
  
