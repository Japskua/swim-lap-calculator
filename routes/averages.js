/**
 * Created by Janne on 29.10.2014.
 */
var express = require('express');
var router = express.Router();
var Calculator = require('./../js/calculator/calculator');
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res) {

    // Send something for calculation
    var json = {
        distance : 400,
        time : ""
    };

    var calculator = new Calculator();
    calculator.CalculateAverage(json, function(err, result) {
        if(err) {
            res.send("Error happened", err);
        }

        res.send('We got some results', result);

    });


});

module.exports = router;
