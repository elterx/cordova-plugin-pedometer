
var exec = require("cordova/exec");

var Pedometer = function () {
    this.name = "Pedometer";
};

Pedometer.prototype.isStepCountingAvailable = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "isStepCountingAvailable", []);
};

Pedometer.prototype.isDistanceAvailable = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "isDistanceAvailable", []);
};

Pedometer.prototype.isFloorCountingAvailable = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "isFloorCountingAvailable", []);
};

Pedometer.prototype.startPedometerUpdates = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "startPedometerUpdates", []);
};

Pedometer.prototype.stopPedometerUpdates = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "stopPedometerUpdates", []);
};

Pedometer.prototype.startStepUpdates = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "startStepUpdates", []);
};

Pedometer.prototype.stopStepUpdates = function (onSuccess, onError) {
    exec(onSuccess, onError, "Pedometer", "stopStepUpdates", []);
};

Pedometer.prototype.queryData = function (onSuccess, onError, options) {
    exec(onSuccess, onError, "Pedometer", "queryData", [options]);
};

module.exports = new Pedometer();
