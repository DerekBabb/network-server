def on_received_string(receivedString):
    radio.send_number(radio_band)
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    if name == "password" and value == passcode:
        pass
    else:
        pass
radio.on_received_value(on_received_value)

radio_band = 0
passcode = 5
radio_band = 4
radio.set_group(radio_band)
basic.show_icon(IconNames.HAPPY)

def on_forever():
    radio.send_value("passcode", passcode)
    basic.pause(2000)
basic.forever(on_forever)
