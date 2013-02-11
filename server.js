var express = require('express');
var app = express();
var terminal = require('child_process').spawn('cmd');

terminal.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

terminal.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

terminal.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});

app.use(express.static(__dirname + '/public'));

app.get('/wakeup.html', function(req, res) {
	terminal.stdin.write('xset dpms force on\n');
	res.end();
});

app.listen(3000);
console.log('Listening on port 3000');

