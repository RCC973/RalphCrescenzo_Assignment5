var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');

/* Items list page */
router.get('/', ctrlItems.itemList);
/* Bids page */
router.get('/items/:itemid', ctrlItems.addBid);
/* Add Item page */
router.get('/add-item', ctrlItems.addItem);

module.exports = router;
