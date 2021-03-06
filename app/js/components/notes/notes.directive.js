;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .directive("noteList", noteListDirective)
        .directive('noteItem', noteItemDirective);

    function noteItemDirective() {
        return {
            restrict: "E",
            templateUrl: "js/components/notes/note-item.directive.tmpl.html",
            scope: {
                note: '=',
                filterBy: '='
            },
            replace: true,
            transclude: true
        };
    }

    function noteListDirective() {
        return {
            restrict: "E",
            scope: {
                data: '=',
                filterBy: "=",
                isOpen: "="
            },
            templateUrl: "js/components/notes/notes.directive.tmpl.html",
            controller: NoteListController,
            controllerAs: "vm",
            bindToController: true
        };
    }

    NoteListController.$inject = ['$scope'];

    function NoteListController($scope) {
        var vm = this;
        var notes = angular.copy(this.data);

        if (!notes.length) {
            return;
        }

        vm.searchText = this.filterBy;

        $scope.$watch(function () {
            return vm.filterBy;
        }, function (newVal) {
            vm.searchText = newVal;
        });

        vm.hidden = true;
        vm.isEmpty = !notes.length;
        vm.firstNote = notes.shift();
        vm.hiddenNotes = notes;

        vm.toggleHiddenNotes = function () {
            vm.hidden = !vm.hidden;
        };
    }
})();
