(function () {
    'use strict';

    angular.module('app').controller('contentCtrl', contentCtrl);

    contentCtrl.$inject = ['$scope'];

    function contentCtrl($scope) {
        var vm = this;
        
        vm.init = init;

        function init() {

        }
    }
})();
