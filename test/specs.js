
var games =  [
        {title: "Frankie Dettori",         url: "image1",  cat_id: "39,3,79",  categories: "Popular Games,Slots,All Games"},
        {title: "Desert Treasure Desktop", url: "image2",   cat_id: "3,79",     categories: "Slots,All Games"},
        {title: "Vacation Station",        url: "image3",   cat_id: "3,79",     categories: "Slots,All Games"}
    ];
describe( 'Category controller', function(){
    var scope, http, DummyCtrl;
    

    beforeEach(module('MainApp'));
    beforeEach(inject(function($controller, $rootScope, $routeParams) {

        scope = $rootScope.$new();
        $routeParams.query = "39";
        DummyCtrl = $controller('CategoriesCtrl', {
            $scope: scope
        });
        scope.games = games;
        scope.toggleModal(scope.games[2]);
    }));

    it('should equal to title name called Vacation Station', function(){
        console.log('should equal to title name called Vacation Station');
        expect(scope.selectedGame.title).toEqual("Vacation Station");
    });
    
    it('should games length equal to 3', function () {
        console.log('should games length equal to 3');
        expect(scope.games.length).toBe(3);
    })
    
     it('Should contain categoriy id 39', function () { 
          console.log('Should contain categoriy id 39');
        expect(games[0].cat_id).toContain("39");
    });

    it('Should contain categoriy id 79', function () {  
         console.log('Should contain categoriy id 79');
        expect(games[0].cat_id).toContain("79");
    });

});

describe('Category Filter', function(){ //describe your object type

    var $filter, filter;
    
    beforeEach(function() { //initialize your filter
        module('MainApp')
        inject(function ($injector) {
            $filter = $injector.get('$filter');
            query = "79";
            filter = $filter('categoryFilter');

        });
    });

        it('Should return 3 the lenght of the filter', function () { 
            console.log('Should return 3 the lenght of the filter');
            expect(filter(games,query).length).toBe(3);
        });


});
