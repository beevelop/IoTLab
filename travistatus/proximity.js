

var five = require("johnny-five");
var board = new five.Board();

var led = null;
board.on("ready", function() {
    console.log('johnny ready');

    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7,
        freq: 500
    });
    proximity.on("data", function() {
        console.log("inches: ", this.inches);
        console.log("cm: ", this.cm);

        var clr = parseInt(this.cm);

        if (clr > 100) {
            clr = parseInt(clr / 100, 10) * 100;
        } else if (clr > 10) {
            clr = parseInt(clr / 10, 10) * 10;
        } else if (clr > 1) {
            clr = parseInt(clr / 1, 10) * 1;
        }

        if (led) {
            led.color("#"+ ('00000' + (clr * 10 | 0).toString(16)).substr(-6));
        }
    });



    // Initialize the RGB LED
    led = new five.Led.RGB({
        pins: {
            red: 6,
            green: 5,
            blue: 3
        }
    });

    // Add led to REPL (optional)
    this.repl.inject({
        led: led
    });

    // Turn it on and set the initial color
    led.on();
});
