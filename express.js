var express = require('express');
var bp = require('body-parser');
var _ = require('underscore');

var app = express();
app.use(bp.json());
app.use(express.static('public'));

var id = 1;
var todotask=[
{
	description:"watch movie at evening",
	completed: true
},
{
	description:"call friends at hhasd	 home",
	completed: true
},
{
	description:"watch",
	completed: true
},
{
	description:"adsd",
	completed: true,
	id: 5
}
]

app.get('/getmytasks', function(req, res) {
	res.json(todotask);
})
app.delete('/deletetasks/:id', function(req, res) {
	var tempId = parseInt(req.params.id, 10);
	var matchedToDo = _.findWhere(todotask,{id:tempId});
	if(!matchedToDo) {
		res.status(404).json({"error":"id not found"})
	} else {
		todotask=_.without(todotask, matchedToDo);
		res.json(matchedToDo);
	}
});

app.post('/postmytask', function(req, res) {
	var reqdata = req.body;
	reqdata.id = id++;
	todotask.push(reqdata);
	res.json(reqdata);
})

app.listen(3000,function() {
	console.log('server started');
})