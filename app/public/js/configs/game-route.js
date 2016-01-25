angular
.module('MainApp').config(function($routeProvider) {
    $routeProvider.when('/games',
        {
            controller: 'CategoriesCtrl',
            templateUrl: 'partials/category-view.html',
            resolve: {
                query: function ($route) { $route.current.params.query = '79'; }
            }
        })
        .when('/featured',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '39'; }
                }
            })
        .when('/slots',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '3'; }
                }
            })
        .when('/roulette',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '25'; }
                }
            })
        .when('/blackjack',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '2'; }
                }
            })
        .when('/jackpots',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '4'; }
                }
            })
        .when('/live',
            {
                controller: 'CategoriesCtrl',
                templateUrl: 'partials/category-view.html',
                resolve: {
                    query: function ($route) { $route.current.params.query = '33'; }
                }
            })
        .otherwise({ redirectTo: '/featured' });
});