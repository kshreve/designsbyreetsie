angular.module('designsByReetsie').directive('email', [function() {
  return {
    restrict: 'AE',
    templateUrl: 'emailForm.html'
  };
}]);

angular.module('designsByReetsie').directive('navBar', [function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.$on('nav-bar-action-toggle', function(event, args) {
        args.show ? element.addClass('in') : element.removeClass('in');
      });
    }
  };
}]);

angular.module('designsByReetsie').directive('navBarAction', [function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.$root.showNav = false;
      element.on('click', function() {
        scope.$root.showNav = !scope.$root.showNav;
        scope.$emit('nav-bar-action-toggle', { show: scope.$root.showNav });
      });
    }
  };
}]);

