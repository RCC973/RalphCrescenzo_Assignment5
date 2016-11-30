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

var getItemInfo = function (req, res, callback) {
  var requestOptions, path;
  path = "/api/items/" + req.params.itemId;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
      requestOptions,
      function(err, response, body) {
        var data = body;
        if (response.statusCode === 200) {
          console.log('request is working')
          callback(req, res, data);
        } else {
          _showError(req, res, response.statusCode);
        }
      }
  );
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



var renderBidpage = function(req, res, itemDetail){
  res.render('add-bid', {
    title: 'Add a Bid for ',
    pageHeader: {
      title: 'Add a Bid',
    },
    error: req.query.err,
    url: req.originalUrl
  });
};

/* GET 'Bid' page */
module.exports.addBid = function(req, res){
  renderBidpage(req, res);
};



var renderAddpage = function(req, res){
  res.render('add-item', {
    title: 'Add a New Item',
    pageHeader: {
      title: 'Add a New Item',
      strapline: 'Add Items for Others to Bid On'
    }
  });
};

/* GET 'Add-item' page */
module.exports.addItem = function(req, res){
  renderAddpage(req, res);
};