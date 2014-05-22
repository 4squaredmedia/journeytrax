'use strict';

angular.module('mean.jtmain').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('jtmain example page', {
            url: '/jtmain/example',
            templateUrl: 'jtmain/views/index.html'
        });
    }
]);
