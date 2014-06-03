var express = require('express');
var app = express();
var nodemailer = require("nodemailer");

app.use(app.router);
app.use(express.static(__dirname));

app.post('/sendMail',function(req, res){
    res.type('text/plain');
    var mailOptions = {
	        from: '',
	        to: 'kshreve@gmail.com',
	        subject: Date.now(),
	        text: '<br/>Phone number to contact'
	};

    var transport = nodemailer.createTransport("Sendmail");
    transport.sendMail(mailOptions);
});

app.listen(process.env.PORT || 3000);