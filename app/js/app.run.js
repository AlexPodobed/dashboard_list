;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .constant('API_URL', "https://some.backend-instance.io/")
        .run(runBlock);

    runBlock.$inject = ["$rootScope", "toastr"];

    function runBlock($rootScope, toastr) {
        toastr.success('Have a nice day!!', "Welcome");

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.title = toState.title || "Dashboard App";
        });
    }
})();
