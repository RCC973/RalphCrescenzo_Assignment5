/**
 * Created by Ralph on 11/30/2016.
 */
angular
    .module('myApp')
    .service('itemsData', itemsData)
    .service('postData', postData);

function itemsData ($http)  {
    return $http.get('/api/items');
};

function postData ($http)  {
    return $http.post('/api/items');
}