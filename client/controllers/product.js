angular.module('routerApp')
  .controller('ProductCtrl',['$scope', '$state', "Product", 'LineItem', 'Order', function($scope, $state, Product, LineItem, Order) {




    var query = {
      filter: {
        limit: 10
      }
    }

    query = {};
    $scope.products = Product.find(query)

    thisOrder = Order.create({
      LineItems: [],
      SubTotal: 0,
      Total: 0
    });

    $scope.addProduct = function (newProduct,newPrice, newSku) {

      var Quantity = Quantity || 1;
      var LineItemToAddTo;
      if(typeof Quantity !== 'number'){
        Quantity = parseInt(Quantity) || 1;
      }

       for(var i = 0; i < thisOrder.LineItems.length; i++){
        if(thisOrder.LineItems[i].Product.sku == newSku){
           LineItemToAddTo = thisOrder.LineItems[i];
         }
       }

      if(!LineItemToAddTo){
        LineItemToAddTo = LineItem.create({
          Product: newProduct,
          Quantity: Quantity,
          SubTotal: (newPrice * Quantity),
          Total: (newPrice * newProduct.TaxRate* Quantity)
        })
        thisOrder.LineItems.push(LineItemToAddTo);
      }

      LineItemToAddTo.Quantity += Quantity;

      for(var i = 0; i < thisOrder.LineItems[i]; i++){

      }
      thisOrder.SubTotal += LineItemToAddTo.SubTotal;
      thisOrder.Total += LineItemToAddTo.Total;

      // $scope.thisOrder.SubTotal += LineItemToAddTo.SubTotal;
      // $scope.thisOrder.Total += LineItemToAddTo.Total;
      // $scope.thisOrder.$save();


      // thisOrder.prototype$updateAttributes(
      //   {SubTotal: $scope.LineItemToAddTo.SubTotal},
      //   {Total: LineItemToAddTo.Total}
      // );


      console.log(thisOrder)




      // var lineItemToAdd = $scope.Order.LineItem.product
      //   .then(function () {
      //     $scope.lineItem.$save();
      //     console.log('added to order')
      //   })

    }
    function getProducts(){


        // Product.find()
        // .then(function() {
        //   console.log('Loaded Products');
        // });

    }

}]);
