angular.module('designsByReetsie').factory('ImgurApi', ['$http', '$route', 'Constants',
  function(http, route, Constants) {
    return function() {
      http.defaults.headers.common['Authorization'] = Constants.ClientId;
      delete http.defaults.headers.common['X-Requested-With'];

      var album = 'ePmjl';
      if (route.current.$$route.originalPath.replace('/', '') == "SoldArt") {
        album = 'qiBAL';
      }

      return http.get(Constants.BaseUrl.concat(album).concat(Constants.Images));
    };
  }]);
