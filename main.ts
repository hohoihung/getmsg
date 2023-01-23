radio.onReceivedString(function (receivedString) {
    msg = receivedString
    basic.showString(msg)
})
let msg = ""
radio.setGroup(2)
wuKong.mecanumWheel(
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4,
wuKong.ServoList.S5
)
basic.forever(function () {
    if (msg == "U") {
        wuKong.mecanumRun(wuKong.RunList.Front, 50)
        basic.showArrow(ArrowNames.North)
        basic.pause(2000)
        wuKong.mecanumStop()
    } else if (msg == "D") {
        wuKong.mecanumRun(wuKong.RunList.rear, 50)
        basic.showArrow(ArrowNames.South)
        basic.pause(2000)
        wuKong.mecanumStop()
    } else if (msg == "L") {
        basic.showArrow(ArrowNames.West)
        wuKong.mecanumRun(wuKong.RunList.left, 50)
        basic.pause(2000)
        wuKong.mecanumStop()
    } else if (msg == "R") {
        basic.showArrow(ArrowNames.East)
        wuKong.mecanumRun(wuKong.RunList.right, 50)
        basic.pause(2000)
        wuKong.mecanumStop()
    }
    msg = "H"
    basic.showIcon(IconNames.No)
})
