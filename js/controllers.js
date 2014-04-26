function HomeCtrl($scope, $cookies, $location, shwarmaLocalStorage, $http) {
	
}

function AboutCtrl($scope, $cookies, $location, $http) {
	
}


function AwardCtrl($scope, $cookies, $location, $http) {
	
}

function GourdArtSoldCtrl($scope, $cookies, $location, $http) {
	
}

function ContactCtrl($scope, $cookies, $location, $http) {
	
}


function formCtrl($scope,$cookies,$location,$http) {
    $scope.content={};

	$scope.submit = function() {
        console.log("submit");
        
        console.log($scope.fname);
        console.log($scope.lname);
        console.log($scope.emailAddress);
        console.log($scope.phone);
        console.log($scope.message);
    };
}