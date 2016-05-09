var app = angular.module('myModule', []);

app.controller('myController', function($scope) {
    $scope.toDos = ['wash the dog', 'cut the grass', 'laundry'];

    $scope.addTodo = function() {
        $scope.toDos.push($scope.formTodoText);
        $scope.formTodoText = " ";
      };
});
