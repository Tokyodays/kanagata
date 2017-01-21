var express = require('express');
var app = express();
var logger = require('morgan');
var compression = require('compression');
var serveStatic = require('serve-static');
var basicAuth   = require('basic-auth-connect');

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(basicAuth(user, pass));
}

//app.use(express.logger('dev'));
app.use(logger('dev'));
app.use(compression());
app.use(serveStatic(__dirname + '/dist'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
