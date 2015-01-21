angular.module('designsByReetsie', ['ngRoute'])
       .config(function($routeProvider) {
            $routeProvider.when('/Home', {templateUrl: 'partials/home.html', controller: HomeController})
                          .when('/About', {templateUrl: 'partials/about.html', controller: AboutController})
                          .when('/Awards', {templateUrl:'partials/awards.html', controller: AwardController})
                          .when('/SoldArt', {templateUrl:'partials/gourdartsold.html', controller: GourdArtSoldController})
                          .when('/Contact', {templateUrl:'partials/contact.html', controller: ContactController})
                          .otherwise({redirectTo: '/Home'});
       })
       .constant('Constants', {"ClientId": "Client-Id 4dd8fa5ed1dafe1",
                               "BaseUrl" : "https://api.imgur.com/3/album/",
                               "Images" : "/images"})
       .controller('HomeController', function($scope, $location, $http) {
            $scope.Page = 'Home';
       });