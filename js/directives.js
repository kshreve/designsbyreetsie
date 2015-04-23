angular.module('designsByReetsie').directive('email', ['$http', function(http) {
    return {
        restrict: 'AE',
        templateUrl: 'emailForm.html',
        link: function(scope, element, attributes) {
            scope.disabled = false;
            
            element.on('submit', function () {
                var messageData = {
                    from: scope.emailForm.emailAddress,
                    name: scope.emailForm.fname + ' ' + scope.emailForm.lname,
                    text: scope.emailForm.message,
                    phone: scope.emailForm.phone
                };
                
                scope.disabled = true;
                
                http.post("/sendMail", messageData)
                    .then(function (data, status, headers, config) {
                        scope.disabled = false;
                        
                        scope.emailForm.emailAddress = '';
                        scope.emailForm.fname = '';
                        scope.emailForm.lname = '';
                        scope.emailForm.message = '';
                        scope.emailForm.phone = '';
                    }, function (data, status, headers, config) {
                        console.log('error', data, status);
                    });
            });
        }
    };
}]);

angular.module('designsByReetsie').directive('navBarAction', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.on('click', function () {
                scope.show = !scope.show;
                scope.$emit('nav-bar-action-toggle', {show: scope.show});
            });
        }
    };
}]);

angular.module('designsByReetsie').directive('navBar', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$on('nav-bar-action-toggle', function (event, args) {
                args.show ? element.addClass('in') : element.removeClass('in');
            });
        }
    };
}]);


    