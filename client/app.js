

var routerApp = angular.module('routerApp', ['lbServices','ui.router']);

routerApp.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/product');

  $stateProvider

    .state('product', {
      url: '/product',
      templateUrl: 'views/product.html',
     controller: 'ProductCtrl'
    })

    .state('order', {
      url: '/order',
      templateUrl: 'views/order.html'
    });

});

routerApp.factory("DataService", function() {
  var myOrder = Order.create();

  return {
    Order: myOrder
  }
});


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






