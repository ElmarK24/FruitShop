angular
  .module('app')
  .controller('ProductCtrl',['$scope', '$state','User', "Product", 'LineItem', 'Order', function($scope, $state, User, Product, LineItem, Order) {

    $scope.products = Product.find();
    $scope.lineItems = LineItem.find();
   // var orders = Order.find();

    // $scope.orders = Order.findById({
    //   id: 1001
    // });
    // var thisOrder = Order.findById({
    //   id: 1001
    // });
    var thisOrder = Order.create({
      LineItems: [],
      Taxes: 0,
      SubTotal: 0,
      Total: 0
    });

    $scope.addProduct = function (newProduct, newQuantity) {

      var Quantity = newQuantity || 1;
      var LineItemToAddTo;

      //update LineItem
      for (var i = 0; i < thisOrder.LineItems.length; i++) {
        if (thisOrder.LineItems[i].Product.sku === newProduct.sku) {
          LineItemToAddTo = thisOrder.LineItems[i];
          LineItemToAddTo.Quantity += Quantity;
          LineItemToAddTo.Taxes = ((newProduct.taxRate * newProduct.price) * LineItemToAddTo.Quantity);
          LineItemToAddTo.SubTotal = (newProduct.price * LineItemToAddTo.Quantity);
          LineItemToAddTo.Total = (newProduct.price * LineItemToAddTo.Quantity) + ((newProduct.taxRate * newProduct.price)
            * LineItemToAddTo.Quantity);

          thisOrder.Taxes += ((newProduct.price * newProduct.taxRate) * Quantity);
          thisOrder.SubTotal += (newProduct.price * Quantity);
          thisOrder.Total += (newProduct.price * Quantity) + ((newProduct.taxRate * newProduct.price) * Quantity);

          console.log("Updated Product")
        }
      }
      //create LineItem
      if (!LineItemToAddTo) {
        LineItemToAddTo = LineItem.create({
          Product: newProduct,
          Quantity: Quantity,
          Taxes: ((newProduct.taxRate * Quantity) * newProduct.price),
          SubTotal: (newProduct.price * Quantity),
          Total: ((newProduct.price * Quantity) + (newProduct.taxRate * newProduct.price) * Quantity)
        });
        console.log("Added new product to cart");
        thisOrder.LineItems.push(LineItemToAddTo);
        thisOrder.Taxes += LineItemToAddTo.Taxes;
        thisOrder.SubTotal += LineItemToAddTo.SubTotal;
        thisOrder.Total += LineItemToAddTo.Total;

      }
      // app.model.Order.push(thisOrder);
      // thisOrder = app.model.Order;
      //console.log(app.model.Order)
      console.log(thisOrder.id)



      // orders.updateAll({id: thisOrder.id},{Total: thisOrder.Total}, function (err, items) {
      //   console.log('update', thisOrder.id)
      // })

    }
  }]);
