;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .config(contactsRoute);

    contactsRoute.$inject = ['$stateProvider'];

    function contactsRoute($stateProvider) {
        $stateProvider
            .state('contacts', {
                url: "/contacts",
                templateUrl: "js/contacts/contacts.list.tmpl.html",
                controller: "ContactListController",
                controllerAs: "vm",
                title: "Contact List"
            })
            .state('newContact', {
                url: "/contacts/new",
                templateUrl: "js/contacts/contacts.new.tmpl.html",
                controller: "ContactNewController",
                controllerAs: "vm",
                title: "New Contact"
            });
    }
})();
