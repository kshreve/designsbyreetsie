angular.module('designsByReetsie', ['ngRoute'])
       .config(['$routeProvider',function($routeProvider) {
            $routeProvider.when('/Home', {templateUrl: 'home.html', controller: 'HomeController'})
                          .when('/About', {templateUrl: 'about.html', controller: 'AboutController'})
                          .when('/Awards', {templateUrl:'awards.html', controller: 'AwardController'})
                          .when('/SoldArt', {templateUrl: 'gourdartsold.html', controller: 'GourdArtSoldController'})
                          .when('/Contact', {templateUrl:'contact.html', controller: 'ContactController'})
                          .otherwise({redirectTo: '/Home'});
       }])
       .constant('Constants', {"ClientId": "Client-Id 4dd8fa5ed1dafe1",
                               "BaseUrl" : "https://api.imgur.com/3/album/",
                               "Images" : "/images"});