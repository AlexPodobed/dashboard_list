;(function () {
    'use strict';

    angular
        .module('dashboardList')
        .filter("highlight", highlight);


    highlight.$inject = ['$sce'];
    function highlight($sce){
        return function (text, matched) {
            if(matched){
                text = text.replace(new RegExp('('+matched+')', 'gi'), '<span class="highlighted">$1</span>');
                return $sce.trustAsHtml(text);
            }else{
                return text;
            }
        };
    }


})();
