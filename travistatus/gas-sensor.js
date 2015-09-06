var request = require('request');
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var sensor = new five.Sensor({
        freq: 420,
        pin: "A1"
    });

    // Scale the sensor's data from 0-1023 to 0-10 and log changes
    sensor.on("change", function() {
        var data = {
            gasval: this.raw
        };
        console.log(data);
        request({
            method: 'PUT',
            url: 'http://nodered.iot.invx.de:1880/data?type=gas',
            body: data,
            json: true
        });
    });
});
