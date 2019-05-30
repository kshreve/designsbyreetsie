var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
