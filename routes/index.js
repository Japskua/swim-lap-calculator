var express = require('express');
var router = express.Router();
var winston = require('winston');

/* GET home page. */
router.get('/', function(req, res) {
  // Start profiling
  winston.profile("gethome");
  // Do some logging
  winston.info("User requested the home page");
  winston.info("This contains metadata", { explanation : "Some strange explanation"});

  // Real work
  res.render('index', { title: 'Express' });

  // Stop profiling
  winston.profile("gethome");
});

module.exports = router;
