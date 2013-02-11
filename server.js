var express = require('express');
var app = express();
var terminal = require('child_process').exec;

app.use(express.static(__dirname + '/public'));

app.get('/wakeup.html', function(req, res) {
	exec('xset dpms force off\n', function(err, out, stderr) {
		console.log(err, out, stderr);
	});
	res.end();
});

app.listen(3000);
console.log('Listening on port 3000');

