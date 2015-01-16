function HomeController(scope, cookies, location, http) {

}

function AboutController(scope, cookies, location, http) {

}


function AwardController(scope, cookies, location, http) {

}

function GourdArtSoldController(scope, cookies, location, http) {

}

function ContactController(scope, http) {
    scope.submit = function() {
        var messageData = {
            from: scope.emailAddress,
            name: scope.fname + ' ' + scope.lname,
            text: scope.message,
            phone: scope.phone
        };

        http.post("/sendMail", messageData)
             .success(function(data, status, headers, config) {
                //console.log('success', data, status);
                scope.emailAddress='';
                scope.fname='';
                scope.lname='';
                scope.message='';
                scope.phone='';
             })
             .error(function(data, status, headers, config) {
                console.log('error', data, status);
             });
    };
}