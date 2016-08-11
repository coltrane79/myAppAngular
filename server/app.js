var express = require("express");

var app = express();
var path = require('path');

//app.use(express.static('/'));

app.use( express.static(__dirname + '/../client') );

//app.get('/', function(request, response){
//  response.sendFile(path.resolve(__dirname + '/../client/index.html'));
//});

app.listen(8000, function(){
  console.log("listening on Port 300");
})
