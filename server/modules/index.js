// index router for in classe express routers lecture

var express = require('express');

// our router to export
var router = express.Router(); // doesn't need a whole app, just router

// setting routes to GET, PUT, POST, DELETE as needed
router.get('/', function(req, res) {
  console.log('base url hit in index.js router');
    res.sendFile(path.resolve('public/views/index.html'));
}); // end router

// don't forget to export!s
module.exports = router;
