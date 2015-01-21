function HomeController($scope, $location, $http) {
    $scope.Page = 'Home';
}

function AboutController($scope, $location, $http) {
    $scope.Page = 'About';
}

function AwardController($scope, ImgurApi) {
    $scope.Page = 'Awards';
    $scope.images = {};
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', 'https://');
        }
        $scope.images = images;
    });
}

function GourdArtSoldController($scope, ImgurApi) {
    $scope.Page = 'SoldArt';
    $scope.images = {};
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', 'https://');
        }
        $scope.images = images;
    });
    
}

function ContactController($scope, $http) {
    $scope.Page = 'Contact';
    $scope.submit = function() {
        var messageData = {
            from: $scope.emailAddress,
            name: $scope.fname + ' ' + $scope.lname,
            text: $scope.message,
            phone: $scope.phone
        };

        $http.post("/sendMail", messageData)
             .success(function(data, status, headers, config) {
                $scope.emailAddress='';
                $scope.fname='';
                $scope.lname='';
                $scope.message='';
                $scope.phone='';
             })
             .error(function(data, status, headers, config) {
                console.log('error', data, status);
             });
    };
}