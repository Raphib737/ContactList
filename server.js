var express = require('express');
var app = express() ;

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req, res){
	console.log("I recieved a GET request")

	person1 = {
		name: "Tim",
		email: "tim@bu.edu",
		number: '111-111-111'
	};

	person2 = {
		name: "im",
		email: "im@bu.edu",
		number: '222-222-222'
	};

	person3 = {
		name: "m",
		email: "m@bu.edu",
		number: '333-333-333'
	};

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server Running on port 3000");
