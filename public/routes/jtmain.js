'use strict';

angular.module('mean.jtmain').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('JourneyTrax', {
            url: '/jtmain/example',
            templateUrl: 'jtmain/views/index.html'
        });
    }
]);
