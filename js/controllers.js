function HomeCtrl($scope, $cookies, $location, shwarmaLocalStorage, $http) {

}

function AboutCtrl($scope, $cookies, $location, $http) {

}


function AwardCtrl($scope, $cookies, $location, $http) {

}

function GourdArtSoldCtrl($scope, $cookies, $location, $http) {

}

function ContactCtrl($scope, $http) {
	$scope.submit = function() {
	    var mailOptions = {
	        from: $scope.emailAddress,
	        to: 'kshreve@gmail.com',
	        subject: $scope.fname+' '+$scope.lname + 'Designs By Reetsie Inquiry' + Date.now(),
	        text: $scope.message + '<br/>Phone number to contact' + $scope.phone
	    }
    };
}