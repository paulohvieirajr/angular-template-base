(function () {
    'use strict'
    angular.module('app')
	.config(['$stateProvider', 'urlBase', function ($stateProvider, urlBase) {
	    $stateProvider
            .state(urlBase + '/contact', {
                url: urlBase + '/contact',
                cache: false,
                templateUrl: 'app/pages/contact/contact.html',
                controller: 'contactController as vm'
            });
	}]);
})();