let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let var2 = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let var3 = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        var2 = var2.range(0, 3)
        var2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (input.buttonIsPressed(Button.B)) {
        var3 = var3.range(6, 9)
        var3.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip = strip.range(0, 9)
    }
})
