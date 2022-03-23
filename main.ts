radio.onReceivedString(function (receivedString) {
    radio.sendNumber(radio_band)
})
let radio_band = 0
radio_band = 4
radio.setGroup(radio_band)
basic.forever(function () {
	
})
