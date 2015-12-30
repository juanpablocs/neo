neoApp.directive("neoLogin", [
  function () {
    return {
      restrict: 'E',
      scope:{ formAction: "@neoAction"},
      controller: function($scope){
        $scope.status = "ingresa porfavor";
        $scope.submitLogin = function(event){
          event.preventDefault();
          console.log('todo correcto, enviar ajax');
          console.info($scope.user);
        }
      },
      templateUrl: function(elem, attr){
        return './app/components/login/views/' + attr.neoType + '.html';
      }
    };
  }
])