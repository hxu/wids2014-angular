'use strict';

angular.module('MyApp', []);

angular.module('MyApp').
  controller('TodoCtrl', ['$scope', 'MyBackend', function($scope, MyBackend) {
    $scope.helloMessage = "Hi everyone";


  }]);

angular.module('MyApp').
  directive('taskList', function() {
    return {
      scope: true,
      controller: function($scope, $attrs) {
        $scope.taskListName = $attrs.listName || 'My tasks';
        $scope.taskList = [
          {name: "My first task", completed: true},
          {name: "My second task", completed: false},
          {name: "Third task", completed: false}
        ];
        $scope.addTask = function() {
          if (!($scope.newTaskName === undefined || $scope.newTaskName === '')) {
            $scope.taskList.push({name: $scope.newTaskName, completed: false});
            $scope.newTaskName = undefined;
          }
        };

        $scope.removeTask = function(idx) {
          $scope.taskList.splice(idx, 1);
        };

      },
      templateUrl: 'task-list.html'
    }
  });


angular.module('MyApp').
  factory('MyBackend', function() {
    var svc = {};

    svc.getTaskList = function() {

    };

    return svc;

  });
