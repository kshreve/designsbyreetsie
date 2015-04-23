angular.module('designsByReetsie').controller('Main', ['$scope', '$route', function (scope, $route) {
    scope.routes = [];
    angular.forEach($route.routes, function (config, route) {
        if(config.hasOwnProperty('caseInsensitiveMatch') && config.name) {
            scope.routes.push({url: "#" + route, name: config.name});
        }
    });

    var stringOrBackup = function(string, backupString) {
        if(string === null || string === undefined) {
            return backupString;
        } 
        return string;
    };
    
    scope.isActive = function(name) {
        if($route.current) {
            scope.routeName = stringOrBackup($route.current.$$route.headerName, $route.current.$$route.name);
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
