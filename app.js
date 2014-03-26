'use strict';

angular.module('MyApp', []);

angular.module('MyApp').
  controller('TaskCtrl', ['$scope', function($scope) {
    $scope.welcomeMessage = "Hello world!";


  }]);


angular.module('MyApp').
  directive('taskList', function() {
    return {
      scope: true,
      controller: ['$scope', function($scope) {

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

        $scope.removeTask = function(taskIdx) {
          $scope.taskList.splice(taskIdx, 1);
        };

      }],
      templateUrl: 'task-list.html'
    };
  });