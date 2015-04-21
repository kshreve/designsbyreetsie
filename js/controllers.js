angular.module('designsByReetsie').controller('Main', ['$scope', '$route', function (scope, $route) {
    scope.routes = [];
    angular.forEach($route.routes, function (config, route) {
        if(config.hasOwnProperty('caseInsensitiveMatch') && config.name) {
            scope.routes.push({url: "#" + route, name: config.name});
        }
    });

    scope.isActive = function(name) {
        if($route.current) {
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
    scope.submit = function () {
        var messageData = {
            from: scope.emailForm.emailAddress,
            name: scope.emailForm.fname + ' ' + scope.emailForm.lname,
            text: scope.emailForm.message,
            phone: scope.emailForm.phone
        };

        http.post("/sendMail", messageData)
            .success(function (data, status, headers, config) {
                scope.emailForm.emailAddress = '';
                scope.emailForm.fname = '';
                scope.emailForm.lname = '';
                scope.emailForm.message = '';
                scope.emailForm.phone = '';
            })
            .error(function (data, status, headers, config) {
                console.log('error', data, status);
            });
    };
}]);
