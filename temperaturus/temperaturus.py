import RPi.GPIO as GPIO
import time

GreenPin = 11
RedPin = 13

GPIO.setmode(GPIO.BOARD)
GPIO.setup(GreenPin, GPIO.OUT)
GPIO.setup(RedPin, GPIO.OUT)
GPIO.output(GreenPin, GPIO.HIGH)
GPIO.output(RedPin, GPIO.HIGH)

changeTemp = raw_input("Please enter temp value: ")
print "you entered", changeTemp

#breakTime = raw_input("Please enter time value: ")
#print "you entered", breakTime

while 1:
    tempfile = open("/sys/bus/w1/devices/28-021502fe2aff/w1_slave")
    thetext = tempfile.read()
    tempfile.close()

    tempdata = thetext.split("\n")[1].split(" ")[9]
    temperature = float(tempdata[2:])
    temperature = temperature / 1000
    print temperature

    if changeTemp > temperature:
        GPIO.output(RedPin, GPIO.HIGH)
        GPIO.output(GreenPin, GPIO.LOW)

    else:
        GPIO.output(RedPin, GPIO.LOW)
        GPIO.output(GreenPin, GPIO.HIGH)



    time.sleep(1)
