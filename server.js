var express = require('express');
var bp = require('body-parser');
var _ = require('underscore');

var app = express();
app.use(bp.json());
app.use(express.static('public'));


app.listen(3000,function() {
	console.log('Server started');
})