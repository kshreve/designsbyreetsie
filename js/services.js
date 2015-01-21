angular.module('designsByReetsie')
	   .factory('ImgurApi', function($http, Constants) {
	        var thing = {};
	        
	        thing.getPageImages = function (page) {
                $http.defaults.headers.common['Authorization'] = Constants.ClientId;
                delete $http.defaults.headers.common['X-Requested-With'];
                
                var album = 'ePmjl';
                if(page == "SoldArt") {
                    album = 'ePmjl'; //TODO: PUT SOMETHING HERE FOR ANOTHER ALBUM.
                }
                
                return $http.get(Constants.BaseUrl.concat(album).concat(Constants.Images));
	        };
	    
    	    return thing;
	    });