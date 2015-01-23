angular.module('designsByReetsie').controller('HomeController', ['$scope', function($scope) {
    $scope.$parent.Page = 'Home';
}]);


angular.module('designsByReetsie').controller('AboutController', ['$scope', function($scope) {
    $scope.$parent.Page = 'About';
}]);

angular.module('designsByReetsie').controller('AwardController', ['$scope', 'ImgurApi', function($scope, ImgurApi) {
    $scope.$parent.Page = 'Awards';
    
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', '');
        }
        $scope.images = images;
    });
}]);

angular.module('designsByReetsie').controller('GourdArtSoldController', ['$scope', 'ImgurApi', function($scope, ImgurApi) {
    $scope.$parent.Page = 'SoldArt';
    
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', '');
        }
        $scope.images = images;
    });
}]);

angular.module('designsByReetsie').controller('ContactController', ['$scope', '$http', function($scope, $http) {
    $scope.$parent.Page = 'Contact';
    
    $scope.submit = function() {
        var messageData = {
            from: $scope.emailForm.emailAddress,
            name: $scope.emailForm.fname + ' ' + $scope.emailForm.lname,
            text: $scope.emailForm.message,
            phone: $scope.emailForm.phone
        };

        $http.post("/sendMail", messageData)
             .success(function(data, status, headers, config) {
                $scope.emailForm.emailAddress='';
                $scope.emailForm.fname='';
                $scope.emailForm.lname='';
                $scope.emailForm.message='';
                $scope.emailForm.phone='';
             })
             .error(function(data, status, headers, config) {
                console.log('error', data, status);
             });
    };
}]);