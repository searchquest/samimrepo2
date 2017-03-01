var express = require('express');
var bp = require('body-parser');
var _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(bp.json());
app.use(express.static('public'));
var db;
MongoClient.connect('mongodb://admin:admin@ds027896.mlab.com:27896/samimdb',(err, database) => {
	if(err) return console.log(err);
	db = database
})

app.post('/addmydata', (req,res) => {
	db.collection('userdb').save(req.body, (err,result) => {
		if(err) return console.log(err);
		console.log('saved to db');
	})
});

app.listen(3000,function() {
	console.log('server started');
})