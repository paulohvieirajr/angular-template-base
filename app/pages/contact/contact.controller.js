(function () {
    'use strict';

    angular.module('app').controller('contactController', contactController);

    contactController.inject = ['urlBase'];

    function contactController(urlBase) {
        var vm = this;
        
        vm.init = init;

        function init() {

        }
    }
})();