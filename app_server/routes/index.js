var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');
var ctrlOthers = require('../controllers/others');

/* Items list page before SPA
router.get('/', ctrlItems.itemList);*/

/* Items list page */
router.get('/', ctrlOthers.angularApp);

/* Bids page */
router.get('/items/:itemid', ctrlItems.addBid);

/* Add Item page */
router.get('/add-item', ctrlItems.addItem);

module.exports = router;
