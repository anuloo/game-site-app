//load categories according to category id
angular
.module('MainApp').controller('CategoriesCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $scope.query = $routeParams.query; // passing from the routing the category id
    $http.get('/games/get').success(function (res) {
        $scope.games = res;
    });
    //$scope.games = loadGames(); // this can be used if there are no db available
    
    $scope.modalShown = false;
    $scope.toggleModal = function(game) {
        $scope.modalShown = !$scope.modalShown;
        $scope.selectedGame = game;
    };

}]);