var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gamesSchema = new mongoose.Schema({
    title: String,
    url: String,
    cat_id: String,
    categories: String,
});

mongoose.model('GamesSchema', gamesSchema,'games');
