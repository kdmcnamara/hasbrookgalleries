'use strict';

var express = require('express');
var http = require('http');

var app = express();



app.use('/', express.static('public'));


var server = http.createServer(app);

app.listen(process.env.PORT || 8080, () =>  {
	console.log("Server is running on port 3000!");
});
