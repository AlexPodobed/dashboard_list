;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .controller("ContactListController", ContactListController)
        .controller("ContactNewController", ContactNewController);


    ContactListController.$inject = ["Contacts"];
    function ContactListController(Contacts) {
        var vm = this;
        vm.orderType = "";
        vm.searchText = "";

        vm.changeOrder = changeOrder;

        initialize();

        function changeOrder(type) {
            vm.reverse = (vm.orderType === type) ? !vm.reverse : false;
            vm.orderType = type;
        }

        function initialize() {
            return Contacts.query().then(function (data) {
                vm.contacts = data;
                return vm.contacts;
            });
        }
    }


    ContactNewController.$inject = ["$state", "Contacts", "toastr"];
    function ContactNewController($state, Contacts, toastr) {
        var vm = this;

        vm.createContact = createContact;
        vm.cancel = cancel;

        initialize();

        function initialize() {
            vm.contactModel =  {
                "picture": "http://placehold.it/32x32",
                "name": "",
                "phone": "",
                "email": "",
                "notes": [],
                "account_id": "",
                "account_description": "",
                "account_link": ""
            };

            return vm.contactModel;
        }

        function createContact() {
            vm.contactModel["id"] = "asd" + new Date().getTime();

            return Contacts.save(vm.contactModel).then(function () {
                toastr.success('Successfully created!', "New contact");
                initialize();
                $state.go('contacts');
            });
        }

        function cancel() {
            initialize();
        }
    }

})();
