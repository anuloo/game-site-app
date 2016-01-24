
// import the packages we needed
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');

//create the app
var app = express();

//MIDDLEWARES=============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

var port = process.env.PORT || 3000;        // set our port

// REGISTER OUR ROUTES -------------------------------
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//END MIDDLEWARES==========================================
module.exports = app;