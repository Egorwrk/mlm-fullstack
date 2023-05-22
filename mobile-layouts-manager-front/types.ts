export interface Device {
    height: number
    width: number
    screens: MyScreen[]
    nav: Nav
}

export interface Devices {
    phone: Device | null
    tablet: Device | null
    miniPhone: Device | null
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

export interface Template {
    name: string
    devices: Devices
}