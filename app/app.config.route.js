(function () {
    'use strict';

    var app = angular.module('app');

    app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'urlBase', routeConfigurator]);

    function routeConfigurator($urlRouterProvider, $stateProvider, $locationProvider, urlBase) {
        $urlRouterProvider.otherwise(urlBase + '/home');
         
        //$locationProvider.html5Mode(true); 
    }

})();