angular.module('myApp', []);


var itemListCtrl = function ($scope) {
    $scope.data = {
        items: [{
            _id : "583baddf946d0eeb1ee2f0b9",
            name: "iPhone 5s",
            description: "Apple iPhone 5s - Verizon",
            startingPrice: 100,
            bids: [ {
                username: "bdalgaard",
                price: 120
            }]
        }, {
            _id : "583badee946d0eeb1ee2f0ba",
            name: "Nexus 6P",
            description: "Google Nexus 6P",
            startingPrice: 200,
            bids: [{
                username: "bdalgaard",
                price: 220
            }]
        }]
    }
};

angular
    .module('myApp')
    .controller('itemListCtrl', itemListCtrl);