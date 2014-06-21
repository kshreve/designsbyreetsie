var express = require('express');
var app = express();
var mail = require("nodemailer");

app.use(app.router);
app.use(express.static(__dirname));

app.post('/sendMail',function(req, res){
    res.type('text/plain');
    
    var smtpTransport = nodemailer.createTransport("SMTP",{
       service: "Gmail",
       auth: {
           XOAuth2: {
            user: "436379670934-j9f264cjcaucr7mgnfg2p9fkdpib2s3n@developer.gserviceaccount.com",
            clientId: "436379670934-j9f264cjcaucr7mgnfg2p9fkdpib2s3n.apps.googleusercontent.com",
            clientSecret: "_-TRbNKuCFmtE0uLkquq0EoC"
        }
       }
    });
    
    smtpTransport.sendMail({
        from: 'shreveke@gmail.com',
	    to: 'kshreve@gmail.com',
	    subject: Date.now(),
	    text: '<br/>Phone number to contact'
	}, function (error,response){
        if(error) {
            console.log(error);
        } else {
            console.log("message sent:" + response.message);
        }
    });
});

app.listen(process.env.PORT || 3000);