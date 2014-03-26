'use strict';

angular.module('MyApp', []);

angular.module('MyApp').
  controller('TaskCtrl', ['$scope', function($scope) {
    $scope.welcomeMessage = "Hello world!";

    $scope.taskList = [
      {name: "My first task", completed: false},
      {name: "Second task", completed: true},
      {name: "Third task", completed: false}
    ];

    $scope.addTask = function() {
      if (!($scope.newTaskName === undefined || $scope.newTaskName === '')) {
        $scope.taskList.push(
          {name: $scope.newTaskName, completed: false}
        );
        delete $scope.newTaskName;
      }
    };

  }]);