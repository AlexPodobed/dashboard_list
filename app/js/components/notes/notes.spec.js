describe('noteItemDirective', function () {
    var element;
    var outerScope;
    var innerScope;
    var $filter;

    var note = {
        text: "some text",
        timestamp: new Date().getTime()
    };


    beforeEach(module('dashboardList'));
    // load templates ( not the best way :/ )
    beforeEach(module("js/components/notes/note-item.directive.tmpl.html"));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$filter_) {
        var transcludedEl = '<span>inner</span>';
        element = angular.element('<note-item note="note">' + transcludedEl + '</note-item>');
        outerScope = _$rootScope_.$new();
        outerScope.note = note;
        _$compile_(element)(outerScope);
        innerScope = element.scope();
        $filter = _$filter_;

        outerScope.$digest();
    }));


    it('should insert proper data in directive', function () {
        var text = element.find('span')[0].innerHTML;
        var time = element.find('span')[1].innerHTML;

        var timeToCompare = $filter('date')(note.timestamp, 'hh:mm dd MMM yyyy');

        expect(text).toEqual(note.text);
        expect(time).toEqual(timeToCompare);
    });

    it('should transclude additional elements, that inserted', function () {
        var transcludedElToCompare = element.find('ng-transclude')[0].innerHTML;

        expect(transcludedElToCompare).not.toBeUndefined()
    });
});



describe('noteListDirective', function () {
    var element;
    var outerScope;
    var innerScope;
    var $filter;

    var notes = [
        {
            "text": "1Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "2Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "3Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "4Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "Don't sell IBM today",
            "timestamp": 1476190792591
        }, {
            "text": "Don't sell IBM today",
            "timestamp": 1476190792591
        }
    ];


    beforeEach(module('dashboardList'));
    // load templates ( not the best way :/ )
    beforeEach(module("js/components/notes/note-item.directive.tmpl.html"));
    beforeEach(module("js/components/notes/notes.directive.tmpl.html"));
    beforeEach(module("js/contacts/contacts.list.tmpl.html"));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$filter_) {
        element = angular.element('<note-list data="notes" class="note-list-wrapper"></note-list>');
        outerScope = _$rootScope_.$new();
        outerScope.notes = notes;
        _$compile_(element)(outerScope);
        innerScope = element.scope();
        $filter = _$filter_;

        outerScope.$digest();
    }));


    it('should display proper amount of note items', function () {
        var hiddenNotes = element.children().find('div').eq(1).find('div');
        var firstNote   = element.children().find('div').eq(0);

        expect(firstNote.length + hiddenNotes.length).toEqual(notes.length)
    });


    it('should display "n-more" link to show notes if note-list more then 2', function () {
        var link   = element.children().find('div').eq(0).find('a');

        expect(link.length).toBe(1);
    });


    it('should display and hide hidden list of notes by clicking on link', function () {
        var hiddenNotes = element.children().find('div').eq(1);
        var firstNote   = element.children().find('div').eq(0);

        expect(hiddenNotes.hasClass('hidden')).toBe(true);
        // fire click event
        firstNote.find('a').triggerHandler('click');
        expect(hiddenNotes.hasClass('hidden')).toBe(false);
    });

});
