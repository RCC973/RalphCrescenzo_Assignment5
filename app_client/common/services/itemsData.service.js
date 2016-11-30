/**
 * Created by Ralph on 11/30/2016.
 */
angular
    .module('myApp')
    .service('itemsData', itemsData)
    .service('itemData', itemData)
    .service('postData', postData);

function itemsData ($http)  {
    return $http.get('/api/items');
};

function postData ($http)  {
    return $http.post('/api/items');
};

function itemData ($http)  {
    var itemById = function (itemId) {
        return $http.get('/api/items/' + itemId);
    };
    return {
        itemById : itemById
    };
}