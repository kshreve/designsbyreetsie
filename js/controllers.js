// TODO: Controllers are defined here by convention. I might have to re-look at this once I start minification of the javascript.
// During minification, I might have to pass in the parameters so that dependencies are still resolved.
function HomeController($scope, $location, $http) {
    $scope.$parent.Page = 'Home';
}

function AboutController($scope, $location, $http) {
    $scope.$parent.Page = 'About';
}

function AwardController($scope, ImgurApi) {
    $scope.$parent.Page = 'Awards';
    
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', '');
        }
        $scope.images = images;
    });
}

function GourdArtSoldController($scope, ImgurApi) {
    $scope.$parent.Page = 'SoldArt';
    
    ImgurApi($scope.Page).success(function(data) {
        var images = data.data;
        for(var i=0;i<images.length; i++){
            images[i].link = images[i].link.replace('http://', '');
        }
        $scope.images = images;
    });
    
}

function ContactController($scope, $http) {
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
}