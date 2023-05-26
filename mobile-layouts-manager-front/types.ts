export interface Template {
    name: string
    height: number
    width: number
    screens: MyScreen[]
    navigator: Navigator
}

export interface MyScreen {
    name: string
    navigator: Navigator
    bc: string
    chosen: boolean
}

export interface Navigator {
    bottomTabs: string[] | null
    drawer: string[] | null
}

export type EditorModeSwitcherType = 'navigator' | 'newScreen' | 'multisetMode' | null
