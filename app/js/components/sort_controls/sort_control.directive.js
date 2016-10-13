;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .directive("sortControls", sortControls);

        function sortControls() {
            return {
                restrict: 'EA',
                template: '' +
                    '<div class="sort-controls"> ' +
                        '<span class="glyphicon glyphicon-chevron-down" ng-show="type == value && !reverse"></span> ' +
                        '<span class="glyphicon glyphicon-chevron-up"   ng-show="type == value && reverse"></span> ' +
                    '</div>',
                scope: {
                    reverse: '=',
                    type: "=",
                    value: '@'
                },
                replace:true
            };
        }

})();
