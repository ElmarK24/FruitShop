/**
 * Created by Elmarksi on 7/7/2017.
 */
angular
  .module('app')
  .controller('LoginController',['$scope', 'User', '$state', function($scope, User, $state) {

    $scope.login = function () {


      User.login({
        email: $scope.email,
        password: $scope.password
          });
      if(User.isAuthenticated){
        console.log('Logged in')
        $state.go('product');
      }

      }


  }]);
