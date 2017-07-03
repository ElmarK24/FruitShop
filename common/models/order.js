'use strict';

module.exports = function(Order) {
  Order.AddLineItem = function (data) {
    var orderId = data.orderId, productId = data.productId, quantity = data.quantity;
  }
};
