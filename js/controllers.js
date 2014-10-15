function HomeCtrl($scope, $cookies, $location, $http) {

}

function AboutCtrl($scope, $cookies, $location, $http) {

}


function AwardCtrl($scope, $cookies, $location, $http) {

}

function GourdArtSoldCtrl($scope, $cookies, $location, $http) {

}

function ContactCtrl($scope, $http) {
   
    
	$scope.submit = function() {
        var messageData = {
            from: $scope.emailAddress,
            to: 'kshreve@gmail.com',
            subject: $scope.fname +' '+ $scope.lname + ' Designs By Reetsie Inquiry ' + Date.now(),
            text: $scope.message + '<br/>Phone number to contact: ' + $scope.phone
        };
        debugger;
        sendMail(messageData);
    };
}

function sendMail(messageToSend) {
    $.ajax({
            type: "POST",
            url: "/sendMail",
            data: messageToSend,
            success: function(msg) {
                console.log('mail sent');
            },
            error: function(msg) {
                console.log('something went wrong');
            }
    });
}