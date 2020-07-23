package com.sagitar.reactnative.bluetooth;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public enum BluetoothEvent {
    BLUETOOTH_ENABLED("bluetoothEnabled"),
    BLUETOOTH_DISABLED("bluetoothDisabled"),
    BLUETOOTH_CONNECTED("bluetoothConnected"),
    BLUETOOTH_DISCONNECTED("bluetoothDisconnected"),
    CONNECTION_SUCCESS("connectionSuccess"),        // Promise only
    CONNECTION_FAILED("connectionFailed"),          // Promise only
    CONNECTION_LOST("connectionLost"),
    READ("read"),
    ERROR("error"),
    PRINTER_DISCONNECT("printerDisconnect"),
    PRINTER_OVERHEAT("printerOverheated"),
    PRINTER_PAPER_OUT("printerPaperOut"),
    PRINTER_LOW_BATTERY("printerLowBattery");

    public final String code;
    private BluetoothEvent(String code) {
        this.code = code;
    }

    public static WritableMap eventNames() {
        WritableMap events = Arguments.createMap();
        for(BluetoothEvent event : BluetoothEvent.values()) {
            events.putString(event.name(), event.code);
        }
        return events;
    }
}
