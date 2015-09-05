#!/usr/bin/env python
import RPi.GPIO as GPIO
import time

GreenPin = 11
RedPin = 13

GPIO.setmode(GPIO.BOARD)
GPIO.setup(GreenPin, GPIO.OUT)
GPIO.setup(RedPin, GPIO.OUT)
GPIO.out(GreenPin, GPIO.HIGH)
GPIO.output(RedPin, GPIO.HIGH)

try:
    while True:
        print '... led on'
        GPIO.output(GreenPin, GPIO.HIGH)
        GPIO.output(RedPin, GPIO.LOW)
        time.sleep(0.5)
        print 'led off ...'
        GPIO.output(GreenPin, GPIO.LOW)
        GPIO.output(RedPin, GPIO.HIGH)
        time.sleep(0.5)
except KeyboardInterrupt:
    GPIO.out(RedPin, GPIO.HIGH)
    GPIO.cleanup();