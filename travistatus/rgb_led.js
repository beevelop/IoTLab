var five = require("johnny-five");

five.Board().on("ready", function() {

    console.log('Ready johnny-five');

    // Initialize the RGB LED
    var led = new five.Led.RGB({
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
    led.color("#0000ff");

    led.blink(1000);

});
