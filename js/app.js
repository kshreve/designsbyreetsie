angular.module('DesignsByReetsie', ['ngCookies','DesignsByReetsieFilters']).
    config(['$routeProvider', function(routeProvider) {
        routeProvider
            .when('/', {templateUrl: 'partials/home.html', controller: HomeController})
            .when('/About',{templateUrl: 'partials/about.html', controller: AboutController})
            .when('/Awards', {templateUrl:'partials/awards.html', controller: AwardController})
            .when('/SoldArt', {templateUrl:'partials/gourdartsold.html', controller: GourdArtSoldController})
            .when('/Contact', {templateUrl:'partials/contact.html', controller: ContactController})
            .otherwise({redirectTo: '/'});
    }]);