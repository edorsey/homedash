var express = require('express');
var app = express();
var exec = require('child_process').exec;
var wakeupCommand, sleepCommand;

if (process.platform == "win32") {
	wakeupCommand = 'nircmd monitor on\n';
	sleepCommand = 'nircmd monitor off\n';
}
else {
	wakeupCommand = 'xset dpms force on\n';
	sleepCommand = 'xset dpms force off\n';
}

app.use(express.static(__dirname + '/public'));

app.get('/wakeup.html', function(req, res) {
	exec(wakeupCommand, function(err, out, stderr) {
		console.log(err, out, stderr);
	});
	res.end();
});

app.get('/sleep.html', function(req, res) {

	exec(sleepCommand, function(err, out, stderr) {
		console.log(err, out, stderr);
	});
	res.end();
});

app.listen(3000);
console.log('Listening on port 3000');