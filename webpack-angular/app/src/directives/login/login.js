module.exports = function(ngModule){
  ngModule.directive('login', function(){
     return {
      restrict: 'E',
      templateUrl: 'src/directives/login/login.html'
     }
  }); 
}
