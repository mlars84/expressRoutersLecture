var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log('');
  res.sendFile(path.resolve('public/view/other.html'));
});

module.exports = router;
