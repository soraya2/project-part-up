var path = require('path');
var http = require('http');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var compress = require('compression');
var hbs = require('express-handlebars');
var env = require('dotenv').config();
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3006;

var index = require('./routes/index');
var users = require('./routes/users');

app.use(compress());

// view engine setup
app.set('port', port);
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'main', layoutDir: __dirname + 'views/layout'}));
app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/',
    outputStyle: 'compressed',

    // prefix:  '/stylesheets',
    debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(app.get('port'), function() {
    console.log("app started on http://localhost:"+ port);

});
