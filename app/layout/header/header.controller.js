(function () {
    'use strict';

    angular.module('app').controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope'];

    function headerCtrl($scope) {
        var vm = this;

        vm.init = init;

        function init() {

        }
    }
})();
