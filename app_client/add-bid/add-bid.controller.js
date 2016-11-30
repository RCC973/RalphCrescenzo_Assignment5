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
}