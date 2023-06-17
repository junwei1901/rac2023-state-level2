basic.forever(function () {
    if (reromicro.ReadUltrasonic() < 10) {
        reromicro.Brake()
    } else {
        reromicro.ReadLineSensors()
        if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(50)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.TurnLeft(50)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.TurnRight(50)
        } else {
            reromicro.Brake()
        }
    }
})
