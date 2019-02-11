var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var expressSession = require('express-session');
var favicon = require('express-favicon');
const multer = require('multer');
var app = express();

app.use(express.static('public'))

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var advertRouter = require('./routes/Adverts');
var profileRouter = require('./routes/profile');
var apiRouter = require('./routes/api');
var adminRouter = require('./routes/admin');
var newsletterRouter = require('./routes/newsletter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('trust proxy', 1) // trust first proxy

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')));
app.use(expressSession({
  secret: 'jaredasch',
  cookie: { maxAge: 60 * 60 * 1000 },
  saveUninitialized: false,
  resave: false
}));


app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use(express.static('public'))
app.use('/profile', profileRouter, express.static(__dirname + '/public'));
app.use('/advert', advertRouter,  express.static(__dirname + '/public'));
app.use('/newsletter', newsletterRouter,  express.static(__dirname + '/public'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


app.listen('3001')
module.exports = app;
