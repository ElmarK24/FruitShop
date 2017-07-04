/**
 * Created by Elmarksi on 6/20/2017.
 */
'use strict';

module.exports = function(app) {
  var User = app.models.User;
  User.create({
    email: 'elmark@gmail.com',
    password: 'elmar',
  }, function(err, userInstance) {
    console.log(userInstance);
  });

  // return;
  //
  // app.dataSources.db.automigrate('Product', function(err) {
  //   if (err) throw err;
  //
  //   app.models.Product.create([{
  //     name: 'Orange',
  //     price: 1.00,
  //     sku: 0,
  //     taxRate: 0.06,
  //   }, {
  //     name: 'Apple',
  //     price: 2.00,
  //     sku: 1,
  //     taxRate: 0.06,
  //   }, {
  //     name: 'Banana',
  //     price: 3.00,
  //     sku: 2,
  //     taxRate: 0.06,
  //   },  ], function(err, products) {
  //     if (err) throw err;
  //
  //     console.log('Models created: \n', products);
  //   });
  // });
};
