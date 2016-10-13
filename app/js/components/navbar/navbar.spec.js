describe('navbarDirective', function () {
    var element;
    var outerScope;
    var innerScope;


    beforeEach(module('dashboardList'));
    // load templates ( not the best way :/ )
    beforeEach(module("js/components/navbar/navbar.directive.tmpl.html"));
    beforeEach(module("js/contacts/contacts.list.tmpl.html"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        element = angular.element('<navbar></navbar>');
        outerScope = _$rootScope_.$new();
        _$compile_(element)(outerScope);
        innerScope = element.scope();

        outerScope.$digest();
    }));


    it('should change isCollapsed state after click on menu btn', function () {
        var event = document.createEvent("MouseEvent");
        event.initEvent("click", true, true);

        expect(innerScope.vm.isCollapsed).toBe(true);
        element.find('button')[0].dispatchEvent(event)
        expect(innerScope.vm.isCollapsed).toBe(false);
    });
});
