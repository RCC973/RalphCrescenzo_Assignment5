/**
 * Created by Ralph on 11/30/2016.
 */
angular
    .module('myApp')
    .controller('bidCtrl', bidCtrl);

function bidCtrl (itemsData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Add Bid',
        strapline: 'View Current Bids and Post a New Bid'
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