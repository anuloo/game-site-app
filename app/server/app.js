
// import the packages we needed
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
//initialize mongoose schemas
require('./models/game-model');
var index = require('./routes/index');
var api = require('./routes/games');


//create the app
var app = express();

//build the connection string
var dbURI = '104.131.59.52:27017/games';

// create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// when successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// if the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// when the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// if the node process ends, close the mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
//CONNECTION EVENTS END

//MIDDLEWARES=============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/js',express.static(__dirname + '/../public/js/'));

// REGISTER OUR ROUTES -------------------------------
app.use('/', index);
// all of our routes will be prefixed with /games
app.use('/games', api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//END MIDDLEWARES==========================================
module.exports = app;