var express = require('express');
var router = express.Router();

//Ignore this file until we start adding a database

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
