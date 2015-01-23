angular.module('designsByReetsie')
	   .factory('ImgurApi', ['$http', 'Constants', function($http, Constants) {
	       return function(page) {
	            $http.defaults.headers.common['Authorization'] = Constants.ClientId;
                delete $http.defaults.headers.common['X-Requested-With'];
                
                var album = 'ePmjl';
                if(page == "SoldArt") {
                    album = 'qiBAL';
                }
                
                return $http.get(Constants.BaseUrl.concat(album).concat(Constants.Images));
	        };
        }]);