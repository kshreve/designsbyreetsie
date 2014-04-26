angular.module('DesignsByReetsieServices',['ngResource'])
    .factory('shwarmaLocalStorage', function () {
        var STORAGE_ID = 'shwarmaOrdering';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (items) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(items));
            }
        };
    });
