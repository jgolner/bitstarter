var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffer = new Buffer(550, "utf-8");
var content = fs.readFileSync ("index.html", "utf-8"); 
 
app.get('/', function(request, response) {
  response.send(buffer.toString(content));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(buffer.toString());
});
  
