var app = angular.module('MainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/games',
        {
            controller: 'CategoriesCtrl',
            templateUrl: 'partials/category-view.html',

        }).otherwise({ redirectTo: '/games' });
});
//hard coded the data for the moment
//TODO: move it into a database
var loadGames = function(){
  var games =  [
        {title: "Frankie Dettori",                    url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_fdt_180x100.jpg",                 cat_id: "39,3,79",  categories: "Popular Games,Slots,All Games"},
        {title: "Desert Treasure Desktop",            url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_dt_180x100.jpg",                  cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Vacation Station",                   url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_er_180x100.jpg",                  cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Hulk 25 Line",                       url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Hulk_180x100.jpg",                   cat_id: "39,3,4,79",categories: "Popular Games,Slots,Jackpots,All Games"},
        {title: "Jackpot Darts",                      url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_drts_180x100.jpg",                cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Genie Hi-Lo",                        url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_ghl_180x100.jpg",                 cat_id: "79",       categories: "All Games"},
        {title: "Gladiator",                          url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_glr_180x100.jpg",                 cat_id: "39,3,79",  categories: "Popular Games,Slots,All Games"},
        {title: "Mr.Cashback",                        url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-mcb-180x100.jpg",                 cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Great Blue",                         url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-bib-180x100.jpg",                 cat_id: "39,3,79",  categories: "Popular Games,Slots,All Games"},
        {title: "Wild Games",                         url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_WILDGAMES_180x100.jpg",           cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Kong: Eighth Wonder of the World",   url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_Kong_180x100.jpg",                cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Iron Man 2 25 Line",                 url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Ironman2_180x100.jpg",               cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Iron Man",                           url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/IronMan_180x100.jpg",                cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "UK Blackjack",                       url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_bjuk_180x100_v2.jpg",             cat_id: "2,79",     categories: "Blackjack,All Games"},
        {title: "21 Duel Blackjack",                  url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_bj21d_180x100_v2.jpg",            cat_id: "2,79",     categories: "Blackjack,All Games"},
        {title: "Fantastic Four",                     url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/FantasticFour_super_180x100.jpg",    cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "The Mummy",                          url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_MUMMY.jpg",                  cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Desert Treasure II",                 url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-dt2-180x100.jpg",                 cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "X Men",                              url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Xmen_180x100.jpg",                   cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Daredevil" ,                         url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Daredevil_180x100.jpg",              cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Rocky",                              url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_rky_180x100.jpg",                 cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Hulk 50 Line",                       url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Hulk50_180x100.jpg",                 cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Football Fans",                      url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_FOOTBALL_FANS.jpg",          cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Hot Gems",                           url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_HOT_GEMS.jpg",               cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Wings of Gold",                      url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_WINGS_OF_GOLD.jpg",          cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Goddess of Life",                    url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_GODDESS_OF_LIFE.jpg",        cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Vikingmania",                        url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_VIKING_MANIA.jpg",           cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Elektra",                            url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/Elektra_180x100.jpg",                cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Fantastic Four 50 Line",             url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/FantasticFour50_super_180x100.jpg",  cat_id: "39,3,4,79",categories: "Popular Games,Slots,Jackpots,All Games"},
        {title: "Iron Man 2 50 Line",                 url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/IronMan250_180x100.jpg",             cat_id: "3,4,79",   categories: "Slots,Jackpots,All Games"},
        {title: "Wild Spirit",                        url: "http://d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_WILDSPIRIT_180x100.jpg",          cat_id: "3,79",     categories: "Slots,All Games"}
    ];
    return games;
}
//TODO: have different categories loaded according to the route path
//load all for now 
app.controller('CategoriesCtrl', ['$scope', function ($scope) {
    
    $scope.games = loadGames();

}]);

