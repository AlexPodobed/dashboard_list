;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .directive("navbar", navbar);

    function navbar() {
        return {
            restrict: 'EA',
            templateUrl: "js/components/navbar/navbar.directive.tmpl.html",
            scope: true,
            replace:true,
            controller: NavbarController,
            controllerAs: "vm",
            bindToController: true
        };
    }

    function NavbarController() { 
        var vm = this;
        vm.isCollapsed = true;

        vm.toggleMenu = function () {
            vm.isCollapsed = !vm.isCollapsed;
        };
    }

})();
