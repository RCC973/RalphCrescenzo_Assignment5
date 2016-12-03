/**
 * Created by Ralph on 11/30/2016.
 */
angular
    .module('myApp')
    .controller('bidCtrl', bidCtrl);

bidCtrl.$inject = ['$routeParams', 'itemData'];
function bidCtrl ($routeParams, itemData) {
    var vm = this;
    vm.itemId = $routeParams.itemId;

    itemData.itemById(vm.itemId)
        .success(function (data) {
            vm.data = { items: data };
            vm.pageHeader = {
                title: vm.data.items.name
            };
        })
        .error(function (e) {
            console.log(e);
        });
};

/* Better way to grab highest price for bids? */
vm.onSubmit = function(){
    vm.highest = Math.max(vm.data.items.itemId.bids.price);
    if(vm.formData.newbid > vm.highest){
        vm.formError = "Bid not accepted, try again buddy";
        return false;
    } else {
        $http.post("/api/items/" + vm.itemId + "/bids", vm.formData);
        vm.message = "Your Bid is Posted"
    }
};