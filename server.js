var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Serve index.html for all routes (SPA support)
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
