(function () {
    'use strict';

    angular.module('app').controller('sidebarCtrl', sidebarCtrl);

    sidebarCtrl.$inject = ['$scope', '$state', '_'];

    function sidebarCtrl($scope, $state, _) {
        var vm = this;
        vm.states = [];

        vm.init = init;

        function init() {
            _.each($state.get(), function (state) {
                if (!state.abstract) {
                    vm.states.push(state);
                }
            });
        }
    }
})();
