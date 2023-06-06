import {MyScreen, Template} from 'types';

export const screenUpdater = (updatedNavigator: string[] | null, name: string, template: Template, chosenNavigator: 'bottomTabs' | 'drawer' | null) => {
    return template.screens.map((screen): MyScreen => {
        if (screen.name === name && updatedNavigator && updatedNavigator.length > 0) {
            for (let i = 0; i < updatedNavigator.length; i++) {
                if (updatedNavigator[i] === name) {
                    return {
                        ...screen,
                        navigator: {
                            bottomTabs: chosenNavigator === 'bottomTabs' ? updatedNavigator : screen.navigator.bottomTabs,
                            drawer: chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : updatedNavigator
                        }
                    }
                }
            }
            return {
                ...screen,
                navigator: {
                    bottomTabs: chosenNavigator === 'bottomTabs' ? null : screen.navigator.bottomTabs,
                    drawer: chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : null
                }
            }
        }
        if ((chosenNavigator === 'bottomTabs' && screen.navigator.bottomTabs) || (chosenNavigator === 'drawer' && screen.navigator.drawer) || screen.name === name) {
            return {
                ...screen,
                navigator: {
                    bottomTabs: chosenNavigator === 'bottomTabs' ? updatedNavigator : screen.navigator.bottomTabs,
                    drawer: chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : updatedNavigator
                }
            }
        } else {
            return screen
        }
    })
}

export const navigatorUpdater: (tmpNavigatorsList: string[] | null, name: string, chosenNavigator: 'bottomTabs' | 'drawer' | null) => string[] | null = (tmpNavigatorsList: string[] | null, name: string, chosenNavigator: 'bottomTabs' | 'drawer' | null) => {
    const updatedNavigator = tmpNavigatorsList ? [...tmpNavigatorsList] : null
    if (updatedNavigator) {
        if (updatedNavigator.length === (filterNavigatorList(updatedNavigator, name)).length) {
            if (chosenNavigator === 'bottomTabs' && updatedNavigator.length >= 5) {
                alert('You already have 5 screens')
                return updatedNavigator
            } else {
                return [...updatedNavigator, name]
            }
        } else {
            if (filterNavigatorList(updatedNavigator, name).length === 0) {
                return null
            } else {
                return filterNavigatorList(updatedNavigator, name)
            }
        }
    } else {
        return [name]
    }
}

export const filterNavigatorList: (navigatorList: string[], name: string) => string[] = (navigatorList: string[], name: string) => {
    return navigatorList.filter((el) => {
        return el !== name
    })
}