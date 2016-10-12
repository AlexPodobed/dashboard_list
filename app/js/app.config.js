;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .config(config);

    config.$inject = ["toastrConfig", '$urlRouterProvider'];


    function config(toastrConfig, $urlRouterProvider) {
        // config for toaster
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 2e3;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.progressBar = true;

        $urlRouterProvider
            .otherwise('/contacts');
    }
})();
