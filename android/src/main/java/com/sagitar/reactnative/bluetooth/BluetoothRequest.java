package com.sagitar.reactnative.bluetooth;

public enum BluetoothRequest {
    ENABLE_BLUETOOTH(1),
    PAIR_DEVICE(2);

    public final int code;
    private BluetoothRequest(int code) {
        this.code = code;
    }
}
