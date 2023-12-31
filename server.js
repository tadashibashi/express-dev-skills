var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("./middleware/method-override");

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ensure vars exists on locals
app.use(function(req, res, next) { res.locals.vars = {}; next(); });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

// mount routers to app
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.vars = {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
