//'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app  = module.exports = loopback();

app.use(loopback.static('client'));
//app.use(loopback.rest());

var session = require('express-session');

const MongoStore = require('connect-mongo')(session);


app.set('trust proxy', 1); // trust first proxy
app.use( session({
    secret : 's3Cur3',
    name : 'sessionId',
     store: new MongoStore({ url: 'mongodb://localhost/mydb' })
  })
);



app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
app.get('/',function(req,res){
  res.sendFile('index.html', { 'root':__dirname + '/../client'});
})

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
