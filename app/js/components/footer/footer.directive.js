;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .directive("footer", footer);

    function footer() {
        return {
            restrict: 'EA',
            templateUrl: "js/components/footer/footer.directive.tmpl.html",
            scope: true,
            replace: true
        };
    }
})();
