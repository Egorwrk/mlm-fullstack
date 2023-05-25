export interface Template {
    name: string
    devices: Devices
}

export interface Devices {
    phone: Device
    tablet: Device | null
    miniPhone: Device | null
}

export interface Device {
    height: number
    width: number
    screens: MyScreen[]
    nav: Nav
}

export interface MyScreen {
    name: string
    nav: Nav
    bc: string
}

export interface Nav {
    bottomTabs: string[] | null
    drawer: string[] | null
}

export type EditorModeSwitcherType = 'navigator' | 'newScreen' | 'multisetMode' | null
