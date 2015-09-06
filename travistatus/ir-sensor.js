var five = require("johnny-five");
var board = new five.Board();

/*var out = "";
board.on("ready", function() {


    console.log('johnny ready');
    var sensor = new five.Sensor.Digital(2);

    sensor.on("change", function() {
        out += this.value;
        console.log(this.value);
    });
});


setInterval(function () {
    console.log('#');
    console.log(out);
    out = '';
}, 2000);*/

board.on("ready", function() {
  var sensor = new five.Sensor("A0");

  console.log('johnny ready');

  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
    console.log(this.value);
  });
});
