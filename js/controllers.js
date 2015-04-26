angular.module('designsByReetsie').controller('Main', ['$scope', '$route', function (scope, $route) {
    scope.routes = [];
    angular.forEach($route.routes, function (config, route) {
        if(config.hasOwnProperty('caseInsensitiveMatch') && config.name) {
            scope.routes.push({url: "#" + route, name: config.name});
        }
    });

    var headerOrBackup = function() {
        if($route.current.$$route !== undefined) {
            if($route.current.$$route.headerName === null || $route.current.$$route.headerName === undefined) {
                return $route.current.$$route.name;
            }

            return $route.current.$$route.headerName;
        }
    };
    
    scope.isActive = function(name) {
        if($route.current && $route.current.$$route) {
            scope.routeName = headerOrBackup();
            return name === $route.current.$$route.name ? 'active' : '';
        }
    };
}]);

angular.module('designsByReetsie').controller('Award', ['$scope', 'ImgurApi', function (scope, ImgurApi) {

    ImgurApi().success(function (data) {
        var images = data.data;
        for (var i = 0, il = images.length; i < il; i++) {
            images[i].link = images[i].link.replace('http://', '');
        }

        scope.images = images;
    });
}]);

angular.module('designsByReetsie').controller('GourdArtSold', ['$scope', 'ImgurApi', function (scope, ImgurApi) {
    ImgurApi().success(function (data) {
        var images = data.data;
        for (var i = 0, il = images.length; i < il; i++) {
            images[i].link = images[i].link.replace('http://', '');
        }

        scope.images = images;
    });
}]);

angular.module('designsByReetsie').controller('Contact', ['$scope', '$http', function (scope, http) {
    
}]);
