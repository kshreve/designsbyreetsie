var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var moment = require("moment");

app.use(express.static(__dirname));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.post('/sendMail', function(req, res) {
    res.type('text/plain');
    
    var transporter = nodemailer.createTransport();
    var mailOptions = req.body;
    
    mailOptions.subject = (" Designs By Reetsie Inquiry " + moment().format("MMM Do"));
    mailOptions.to = 'kshreve+DBR@gmail.com';
    mailOptions.from = mailOptions.from !== null ? mailOptions.from : "designsbyreetsie@gmail.com";
    mailOptions.html = mailOptions.text + "<br /> Name of Person: " + mailOptions.name + "<br /> Phone number to contact: " + mailOptions.phone + "<br/> Their email: " + mailOptions.from;

    transporter.sendMail(mailOptions, function (error,response) {
        if(error) {
            res.end('{"error" : "Error", "status" : 400}');
        } else {
            res.end('{"success" : "Email Sent", "status" : 200}');
        }
    });
});

app.listen(process.env.PORT || 3000);