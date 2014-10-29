/**
 * Created by Janne on 29.10.2014.
 */

var winston = require('winston');
var moment = require('moment');
var _ = require('underscore');

function Calculator() {

}

/**
 * Calculates the average distance traveled for the given time & length
 * @param {JSON} json The json containing calculation info
 * @param {Function} callback The callback function
 * @constructor
 */
Calculator.prototype.CalculateAverage = function(json, callback) {

    // Count the time needed for 1 meter
    var split = json.time/json.distance;

    winston.info("split is now:" + split);

    // Create the results JSON
    var results = {
        splits : {
        }
    };

    // Check what distance we have and calculate separates there
    if(_.contains(json.splits, "fifty")) {
        results.splits.fifty = moment(split*50).format("mm:ss:ms");
    }
    if(_.contains(json.splits, "one")) {
        results.splits.hundred = moment(split*100).format("mm:ss:ms");
    }
    if(_.contains(json.splits, "two")) {
        results.splits.twoHundred = moment(split*200).format("mm:ss:ms");
    }
    if(_.contains(json.splits, "four")) {
        results.splits.fourHundred = moment(split*400).format("mm:ss:ms");
    }

    // And return
    callback(null, results);

};

module.exports = Calculator;