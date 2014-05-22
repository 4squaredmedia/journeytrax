'use strict';

angular.module('mean.jtmain').controller('JtmainController', ['$scope', 'Global',
    function($scope, Global, Jtmain) {
        $scope.global = Global;
        $scope.package = {
            name: 'jtmain'
        };
    }
]);
