'use strict';

var dsConfig = require('../datasources.json');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;

  // Login Page
  app.get('/', function(req, res) {
    var credentials = dsConfig.emailIDs.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass,
    });
  });
  // Verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });
  // Logs a user in
  app.post('/login', function(req, res) {
    User.login({
      email: req.body.email,
      password: req.body.password,
    }, 'user', function(err, token) {
      if (err) {
        if (err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERFIED'){
          res.render('responseToTriggerEmail', {
            title: 'Login failed',
            content: err,
            redirectToEmail: '/api/users/' + err.details.userId + '/verify',
            redirectTo: '/',
            redirectToLinkText: 'Click here',
            userId: err.details.userId,
          });
        } else {
          res.render('response', {
            title: 'Login failed. Wrong username or password',
            content: err,
            redirectTo: '/',
            redirectToLinkText: 'Please login again',
          });
        }
        return;
      }
      res.render('home', {
        email: req.body.email,
        accessToken: token.id,
        redirectUrl: '/api/users/change-password?access_token=' + token.id,
      });
    });
  });
};
