var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var xoauth = require('xoauth2');

app.use(express.static(__dirname));

app.post('/sendMail', function(req, res){
    res.type('text/plain');
    
    var transporter = nodemailer.createTransport();
        
    transporter.sendMail(mailOptions, function (error,response){
        if(error) {
            console.log(error);
        } else {
            console.log("message sent:" + response.message);
        }
    });
});

app.listen(process.env.PORT || 3000);