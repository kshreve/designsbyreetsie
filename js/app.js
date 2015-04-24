angular.module('designsByReetsie', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {templateUrl: 'home.html', name: 'Home', headerName:''})
            .when('/About', {templateUrl: 'about.html', name: 'About Reetsie', headerName:'About Reetsie'})
            .when('/Awards', {templateUrl: 'awards.html', controller: 'Award', name: 'Award Winning Gourds', headerName: 'Gourd Art'})
            .when('/SoldArt', {templateUrl: 'gourdartsold.html', controller: 'GourdArtSold', name: 'Gourd Art Sold', headerName:'Gourd Art Sold'})
            .when('/Contact', {templateUrl: 'contact.html', controller: 'Contact', name: 'Contact', headerName: 'Contact Reetsie'})
            .otherwise({redirectTo: '/Home'});
    }])
    .constant('Constants', {"ClientId": "Client-Id 4dd8fa5ed1dafe1",
        "BaseUrl": "https://api.imgur.com/3/album/",
        "Images": "/images"});
