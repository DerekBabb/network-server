radio.onReceivedString(function (receivedString) {
    radio.sendNumber(radio_band)
})
radio.onReceivedValue(function (name, value) {
    if (name == "password" && value == passcode) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let radio_band = 0
let passcode = 0
passcode = 5
radio_band = 4
radio.setGroup(radio_band)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendValue("password", passcode)
    basic.pause(2000)
})
