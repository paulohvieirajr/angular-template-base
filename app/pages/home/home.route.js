(function () {
    'use strict'
    angular.module('app')
	.config(['$stateProvider', 'urlBase', function ($stateProvider, urlBase) {

	    $stateProvider
           .state(urlBase + '/home', {
               url: urlBase + '/home',
               cache: false,
               templateUrl: 'app/pages/home/home.html',
               controller: 'homeController as vm'
           });
	}]);
})();