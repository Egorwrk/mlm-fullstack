export interface Device {
    height: number
    width: number
    screens: MyScreen[]
}

export interface Devices {
    phone: Device | null
    tablet: Device | null
    miniPhone: Device | null
}

export interface MyScreen {
    nav: Nav
    bc: string
}

export interface Nav {
    bottomTabs: string[] | null
    drawer: string[] | null
    stack: string[] | null

}

export interface Template {
    name: string
    devices: Devices
}