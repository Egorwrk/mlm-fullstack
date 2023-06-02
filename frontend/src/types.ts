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
    emptyBlocks: EmptyBlock[]
    textBlocks: TextBlock[]
    imageBlocks: ImageBlock[]
    registrationBlocks: RegistrationBlock[]
}

export interface Navigator {
    bottomTabs: string[] | null
    drawer: string[] | null
}

export interface EmptyBlock {
    height: number
    width: number
    top: number
    left: number
}

export interface TextBlock extends EmptyBlock {
    text: string
}

export interface ImageBlock extends EmptyBlock {
    uri: string
}

export interface RegistrationBlock extends EmptyBlock {
    login: 'login'
    password: 'password'
    confirmPassword: 'confirm password'
}

export type EditorModeSwitcherType = 'navigator' | 'newScreen' | 'multisetMode' | null
