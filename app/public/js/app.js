angular
.module('MainApp', ['ngRoute'])

//custom filter helps to filter our data by cat_id
.filter('categoryFilter', function() {
    return function(games,query) {
        var out = [];

        angular.forEach(games,function(value,key){
            var cat_id = value['cat_id'].split(",");
            var input = query.split(",");
            for (var i = 0; i < cat_id.length; i++) {
                for (var j = 0; j < input.length; j++) {
                    if (cat_id[i] === input[j]) {
                        out.push(value);
                    }
                }
            }
        });
        console.log("out lenght  "+out.length);
        return out;
    }
});




