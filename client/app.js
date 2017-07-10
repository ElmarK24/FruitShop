

angular.module('app', ['lbServices','ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('product', {
        url: '/product',
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
    })
      .state('order', {
        url: '/order',
        templateUrl: 'views/order.html',
        controller: 'ProductCtrl'
    })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      });

    $urlRouterProvider.otherwise('/login');

}])
  // .run(['$rootScope', '$location', 'authService',
  // function ($rootScope, $location, authService) {
  //
  // }])
;


  // routerApp.controller('ProductCtrl',['Product', '$scope', function (Product, $scope) {
  //
  //   $scope.products = Product.find()
  //
  //   $scope.addItem = function (Order, Product) {
  //     var LineItemToAddTo;
  //     var Quantity = Quantity || 1;
  //
  //     if(!LineItemToAddTo){
  //       LineItemToAddTo = LineItem.create();
  //       LineItemToAddTo.Product = Product;
  //       LineItemToAddTo.SubTotal = (Product.price * Quantity)
  //
  //       Order.LineItems.push(LineItemToAddTo);
  //     }
  //   }
  //
  //
  // }])






