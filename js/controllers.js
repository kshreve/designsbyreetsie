function HomeController($scope, $cookies, $location, $http) {

}

function AboutController($scope, $cookies, $location, $http) {

}


function AwardController($scope, ImgurApi) {
    $scope.images = {};
    ImgurApi.getPageImages('awards').success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', 'https://');
        }
        $scope.images = images;
    });
}

function GourdArtSoldController($scope, ImgurApi) {
    $scope.images = {};
    ImgurApi.getPageImages('gourdartsold').success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', 'https://');
        }
        $scope.images = images;
    });
    
}

function ContactController($scope, $http) {
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