var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var games = mongoose.model('GamesSchema');

// ROUTES FOR OUR API
// =============================================================================

//api for all get routes
router.route('/get').

/** as we dont query via the db all we need to do is to retrieve all games
 *  and let the angular filter to your query
*/
get(function (req, res){
    games.find(function (err, doc){
        if(err){
            return res.send(500, err);
        }
        res.json(doc);
    });
});

module.exports = router;
