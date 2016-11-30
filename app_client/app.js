angular.module('myApp', ['ngRoute']);

function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/add-item', {
            templateUrl: 'add-item/add-item.view.html',
            controller: 'itemCtrl',
            controllerAs: 'vm'
        })
        .when('/add-bid', {
            templateUrl: 'add-bid/add-bid.view.html',
            controller: 'bidCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
}

angular
    .module('myApp')
    .config(['$routeProvider', config]);
