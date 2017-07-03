angular.module('routerApp')
  .controller('OrderCtrl',['$scope', '$state', "Order", "LineItem", "Product", function($scope, $state, Order, LineItem, Product) {

   function getNewOrder(){
     Order.create();
   }

   $scope.addProduct = function () {
debugger;
     var lineItemToAdd = $scope.lineItem.product
       .then(function () {
         $scope.lineItem.$save();
         console.log('added to order')
       })

   }
   $scope.removeProduct = function () {
      LineItem.deleteById({
        id: $scope.LineItem.id
      })
        .then(function () {
          console.log('deleted')
        })
   }

   $scope.updateQuantity = function (newQuantity) {
     LineItem.quantity = newQuantity;
         LineItem.prototype$updateAttributes(
       {id: $scope.lineItem.id},
       {price: $scope.lineItem.quantity}
     );
   }



  }]);
