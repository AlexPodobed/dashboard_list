describe('ContactListController', function() {
    var ContactListController,
        ContactsFactory,
        $controller;

    beforeEach(module('dashboardList'));

    beforeEach(inject(function(_$controller_, _Contacts_) {
        $controller = _$controller_;
        ContactsFactory = _Contacts_;
        ContactListController = $controller('ContactListController', {Contacts: ContactsFactory});
    }));


    it('should be defined and have default values', function() {
        expect(ContactListController).toBeDefined();
        expect(ContactListController.orderType).toBe('');
        expect(ContactListController.searchText).toBe('');
        expect(typeof ContactListController.changeOrder).toBe('function');
    });

    it('should change order-type', function () {
        ContactListController.changeOrder('name');
        expect(ContactListController.orderType).toBe('name');
        expect(ContactListController.reverse).toBe(false);
    });

    it('should change order reverse state', function () {
        ContactListController.changeOrder('name');
        expect(ContactListController.orderType).toBe('name');
        expect(ContactListController.reverse).toBe(false);

        ContactListController.changeOrder('name');
        expect(ContactListController.reverse).toBe(true);
    });
});

describe('ContactNewController', function () {
    var ContactNewController,
        $controller;


    beforeEach(module('dashboardList'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        ContactNewController = $controller('ContactNewController', {});
    }));


    it('should be defined and have default values', function () {
        expect(ContactNewController).toBeDefined();
        expect(typeof ContactNewController.contactModel).toBe('object');
    });

    it('should clear model when `cancel` function is run', function () {
        var defaultModel = angular.copy(ContactNewController.contactModel);

        // set model
        ContactNewController.contactModel = {
            "id": "57fcd21a9049c59b679896cb",
            "picture": "http://www.gfxtouch.com/wp-content/uploads/2014/12/blankAvatar.jpg",
            "name": "Gould Duncan",
            "phone": "+1 (971) 511-3362",
            "email": "",
            "notes": [],
            "account_id": "A600000055",
            "account_description": "ING Bank",
            "account_link": "http://some.bank.com/"
        };
        // fire cancel function
        ContactNewController.cancel();

        expect(ContactNewController.contactModel).toEqual(defaultModel);
    });
});

// describe('ContactsService', function () {
//     var ContactsService;
//
//     beforeEach(module('dashboardList'));
//
//     beforeEach(inject(function(_Contacts_, _$q_) {
//         var deferred = _$q_.defer();
//         ContactsService = _Contacts_;
//
//         sinon.stub(ContactsService, 'query', function () {
//             return deferred.promise
//         });
//     }));
//
//
// });