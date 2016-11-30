angular
    .module('myApp')
    .controller('itemCtrl', itemCtrl);

function itemCtrl (postData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Add Item',
        strapline: 'Add a New Item for Others to Bid on'
    };
    postData
        .success(function (data) {
            vm.message = data.length > 0 ? "" : "No items found";
            vm.data = {items: data};
        })
        .error(function (e) {
            vm.message = "Sorry, can't find anything";
        });
};