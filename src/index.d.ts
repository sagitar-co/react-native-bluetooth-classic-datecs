import { EmitterSubscription } from 'react-native'

declare module 'react-native-bluetooth-classic-datecs' {
    export type Device = {
        name: string,
        address: string,
        id: string,
        class: string,
        extra: any,
        device: any
    }

    export enum BTCharsets {
        LATIN = "ISO_8859_1",
        ASCII = "US_ASCII",
        UTF8 = "UTF_8",
        UTF16 = "UTF_16",
    }

    export enum QRSize {
        SIZE_1 = 1,
        SIZE_4 = 4,
        SIZE_6 = 6,
        SIZE_8 = 8,
        SIZE_10 = 10,
        SIZE_12 = 12,
        SIZE_14 = 14
    }

    export enum QREccLvl {
        LEVEL_L = 1,
        LEVEL_M = 2,
        LEVEL_Q = 3,
        LEVEL_H = 4,
    }

    export enum BARCODE_TYPE {
        UPCA = 65,
        UPCE = 66,      
        EAN13 = 67,      
        EAN8 = 68,      
        CODE39 = 69,      
        ITF = 70,      
        CODABAR = 71,      
        CODE93 = 72,      
        CODE128 = 73,
        PDF417 = 74,
        CODE128AUTO = 75,
        EAN128 = 76,  
    }

    export enum BARCODE_HRI {
        NONE = 0,
        ABOVE = 1,      
        BELOW = 2,      
        BOTH = 3,
    }

    export enum BARCODE_ALIGN {
        LEFT = 0,
        CENTER = 1,      
        RIGHT = 2,    
    }

    export enum BTEvents {
        BLUETOOTH_ENABLED = "bluetoothEnabled",
        BLUETOOTH_DISABLED = "bluetoothDisabled",
        BLUETOOTH_CONNECTED = "bluetoothConnected",
        BLUETOOTH_DISCONNECTED = "bluetoothDisconnected",
        CONNECTION_SUCCESS = "connectionSuccess",        // Promise only
        CONNECTION_FAILED = "connectionFailed",          // Promise only
        CONNECTION_LOST = "connectionLost",
        READ = "read",
        ERROR = "error",
        PRINTER_DISCONNECT = "printerDisconnect",
        PRINTER_OVERHEAT = "printerOverheated",
        PRINTER_PAPER_OUT = "printerPaperOut",
        PRINTER_LOW_BATTERY = "printerLowBattery",   
    }

    export function setAdapterName(newName: string): Promise<void>
    export function requestEnable(): Promise<void>
    export function isEnabled(): Promise<boolean>
    export function list(): Promise<Device[]>
    export function discoverDevices(): Promise<Device[]>
    export function cancelDiscovery(): Promise<void>
    export function pairDevice(id: string): Promise<void>
    export function unpairDevice(id: string): Promise<void>

    export function accept(): Promise<void>
    export function cancelAccept(): Promise<void>

    export function connect(id: string): Promise<Device>
    export function disconnect(): Promise<boolean>
    export function isConnected(): Promise<boolean>
    export function getConnectedDevice(): Promise<Device>

    export function writeToDevice(message: string): Promise<void>
    export function write(message: string | buffer): Promise<void>
    export function printTaggedText(message: string, charset?: BTCharsets): Promise<void>
    export function printImage(imageData: string): Promise<void>
    export function setBarcode(align: BARCODE_ALIGN, small: boolean, scale: 2 | 3 | 4, hri: BARCODE_HRI, height: number)
    export function printQRCode(message: string, size: number, eccLvl: number): Promise<void>
    export function paperFeed(lines: number): Promise<void>
    export function selectCodetable(codetable: number): Promise<void>
    export function reset(): Promise<void>
    export function flush(): Promise<void>
    export function available(): Promise<integer>
    export function readFromDevice(): Promise<void>
    export function readUntilDelimiter(): Promise<void>
    export function clear(): Promise<boolean>

    export function setDelimiter(delimiter: string): Promise<boolean>
    export function setEncoding(code: string): Promise<boolean>
    
    export function addListener(eventName: string, handler: function, context?: object): EmitterSubscription
    export function removeAllListeners(eventName: string): void
    export function removeSubscription(subscription: EmitterSubscription): void
    export function applyReadListeners(): void
}