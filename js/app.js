angular.module('designsByReetsie', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {templateUrl: 'home.html', name: 'Home', headerName:''})
            .when('/About', {templateUrl: 'about.html', name: 'About Reetsie'})
            .when('/Awards', {templateUrl: 'awards.html', controller: 'Award', name: 'Award Winning Gourds'})
            .when('/SoldArt', {templateUrl: 'gourdartsold.html', controller: 'GourdArtSold', name: 'Gourd Art Sold'})
            .when('/Contact', {templateUrl: 'contact.html', controller: 'Contact', name: 'Contact'})
            .otherwise({redirectTo: '/Home'});
    }])
    .constant('Constants', {"ClientId": "Client-Id 4dd8fa5ed1dafe1",
        "BaseUrl": "https://api.imgur.com/3/album/",
        "Images": "/images"});
