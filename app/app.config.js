(function () {
    'use strict';

    var app = angular.module('app');

    app.config(['$httpProvider', 'toastrConfig', 'appVersion', function ($httpProvider, toastrConfig, appVersion) {

        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: true,
            target: 'body' 
        });

        $httpProvider.interceptors.push(interceptorCache);
    }]);

    function interceptorCache($templateCache, appVersion) {
        return {
            'request': function (request) {
                if (request.url.indexOf("api") < 0 && $templateCache.get(request.url) === undefined) {
                    request.url = request.url + '?appVersion=' + appVersion;
                }
                return request;
            }
        }
    }
    
})();