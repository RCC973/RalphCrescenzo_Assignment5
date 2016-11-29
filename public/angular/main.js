angular.module('myApp', []);

var itemsData = function ($http) {
    return $http.get('/api/items');
}

/* hard coded data for testing

var itemsData = function () {
    return [{
        _id : "583baddf946d0eeb1ee2f0b9",
        name: "iPhone 5s",
        description: "Apple iPhone 5s - Verizon",
        startingPrice: 100,
        bids: [ {
            username: "bdalgaard",
            price: 120
        },
            {
                username: "rcrescenzo",
                price: 110}
        ]
    }, {
        _id : "583badee946d0eeb1ee2f0ba",
        name: "Nexus 6P",
        description: "Google Nexus 6P",
        startingPrice: 200,
        bids: [{
            username: "bdalgaard",
            price: 220
        }]
    }];
};
*/


var itemListCtrl = function ($scope, itemsData) {
    $scope.message = "Looking for Items";
    itemsData
        .success(function (data) {
            $scope.message = data.length > 0 ? "" : "No items found";
            $scope.data = {items: data};
        })
        .error(function (e) {
            $scope.message = "Sorry, can't find anything";
        });
};


angular
    .module('myApp')
    .controller('itemListCtrl', itemListCtrl)
    .service('itemsData', itemsData);
