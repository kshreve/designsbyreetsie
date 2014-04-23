angular.module('DesignsByReetsie', ['DesignsByReetsieServices','ngCookies','DesignsByReetsieFilters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',{templateUrl: 'partials/home.html', controller: HomeCtrl})
            .when('/About',{templateUrl: 'partials/about.html', controller: AboutCtrl})
            .when('/Awards', {templateUrl:'partials/awards.html', controller: AwardCtrl})
            .when('/SoldArt', {templateUrl:'partials/gourdartsold.html', controller: GourdArtSoldCtrl})
            .when('/Contact', {templateUrl:'partials/contact.html', controller: ContactCtrl})
            .otherwise({redirectTo: '/'});
    }]);