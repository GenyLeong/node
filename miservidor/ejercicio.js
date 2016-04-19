//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();

var n = prompt('How many more times? ');

prompt.history.save();

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(n);
  response.end();
}

http.createServer(onRequest).listen(1340);