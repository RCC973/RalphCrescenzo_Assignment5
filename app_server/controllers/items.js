var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};

var renderHomepage = function(req, res){
  res.render('index', {
    title: 'Items for bid',
    pageHeader: {
      title: 'Bidding',
      strapline: 'Find items to bid on'
    }
  });
};

/* GET 'index' page */
module.exports.itemList = function(req, res){
  renderHomepage(req, res);
};



var renderBidpage = function(req, res){
  res.render('add-bid', {
    title: 'Add a Bid',
    pageHeader: {
      title: 'Add a Bid',
      strapline: 'Find items to bid on'
    }
  });
};

/* GET 'Bid' page */
module.exports.addBid = function(req, res){
  renderBidpage(req, res);
};



var renderAddpage = function(req, res){
  res.render('add-item', {
    title: 'Add an item',
    pageHeader: {
      title: 'Add an Item',
      strapline: 'Find items to bid on'
    }
  });
};

/* GET 'Add-item' page */
module.exports.addItem = function(req, res){
  renderAddpage(req, res);
};