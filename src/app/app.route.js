(function() {
  'use strict';

	angular.module('app')
			.config(routeConfig);

	function routeConfig($urlRouterProvider, $locationProvider, urlBase) {
		$urlRouterProvider.otherwise(urlBase + '/home');
		$locationProvider.html5Mode({ enabled: true, requireBase: true });
	}

})();
