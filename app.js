'use strict';

angular.module('MyApp', []);

angular.module('MyApp').
  controller('TaskCtrl', ['$scope', function($scope) {
    $scope.welcomeMessage = "Hello world!";

  }]);