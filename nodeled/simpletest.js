var gpio = require("pi-gpio");

var pinNum = 11;

gpio.open(pinNum, "output", function(err) {     // Open pin 16 for output
    console.log('Opened Pin '+pinNum);
    gpio.write(pinNum, 1, function() {          // Set pin 16 high (1)
        console.log('Wrote Pin '+pinNum);
        gpio.close(pinNum);                     // Close pin 16
    });
});
