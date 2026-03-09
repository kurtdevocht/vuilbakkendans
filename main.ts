let NoiseLevelFrom0To100 = 0
let IndicatorLevelFrom0To100 = 0
let ServoAngle = 0
basic.forever(function () {
    NoiseLevelFrom0To100 = input.soundLevel() / 2.55
    IndicatorLevelFrom0To100 = Math.max(NoiseLevelFrom0To100, IndicatorLevelFrom0To100 - 5)
    led.plotBarGraph(
    IndicatorLevelFrom0To100,
    100,
    true
    )
    if (IndicatorLevelFrom0To100 > 20) {
        ServoAngle = 110 + 0.69 * IndicatorLevelFrom0To100
    } else {
        ServoAngle = 110
    }
    servos.P0.setAngle(ServoAngle)
})
