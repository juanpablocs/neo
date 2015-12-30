neoApp.controller('dinamicController', ['$scope', '$compile', function($scope, $compile){
    var directive = '<neo-login neo-type="simple" neo-action="/login"></neo-login>';
    $scope.add = function(){
        console.log($compile(directive)($scope)[0])
        document
            .getElementById('here')
            .appendChild($compile(directive)($scope)[0]);
    }
}]);