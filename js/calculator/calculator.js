/**
 * Created by Janne on 29.10.2014.
 */

function Calculator() {

}

/**
 * Calculates the average distance traveled for the given time & length
 * @param {JSON} json The json containing calculation info
 * @param {Function} callback The callback function
 * @constructor
 */
Calculator.prototype.CalculateAverage = function(json, callback) {

    callback(null, "Hello");

};

module.exports = Calculator;