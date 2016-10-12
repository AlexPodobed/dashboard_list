;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .controller("contactListController", contactListController)
        .controller("contactNewController", contactNewController);

    contactListController.$inject = ["Contacts"];
    contactNewController.$inject = ["$state", "Contacts", "toastr"];

    function contactNewController($state, Contacts, toastr) {
        var vm = this;

        vm.contactModel = getModel();

        vm.createContact = function () {
            Contacts.save(vm.contactModel).then(function () {
                toastr.success('Successfully created!', "New contact");
                vm.contactModel = getModel();
                $state.go('contacts');
            });
        };

        vm.cancel = function () {
            vm.contactModel = getModel();
        };

        function getModel() {
            return {
                "id": "asd"+new Date().getTime(),
                "picture": "http://placehold.it/32x32",
                "name": "",
                "phone": "",
                "email": "",
                "notes": [],
                "account_id": "",
                "account_description": "",
                "account_link": ""
            };
        }
    }

    function contactListController(Contacts) {
        var vm = this;
        vm.orderType = "";
        vm.search = {
            text: ""
        };

        vm.changeOrder = function (type) {
            vm.reverse = (vm.orderType === type) ? !vm.reverse : false;
            vm.orderType = type;
        };

        Contacts.query().then(function (data) {
            vm.contacts = data;
        });
    }
})();
