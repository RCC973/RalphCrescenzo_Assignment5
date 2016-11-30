angular
    .module('myApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl (itemsData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder App',
        strapline: 'Find items to bid on!'
    };
    itemsData
        .success(function (data) {
            vm.message = data.length > 0 ? "" : "No items found";
            vm.data = {items: data};
        })
        .error(function (e) {
            vm.message = "Sorry, can't find anything";
        });
};