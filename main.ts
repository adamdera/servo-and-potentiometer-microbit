let degrees = 0
basic.forever(function () {
    degrees = pins.analogReadPin(AnalogPin.P1)
    servos.P2.setAngle(degrees)
})
