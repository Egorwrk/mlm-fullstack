import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {emptyBlock} from 'constants/emptyMockups';
import {MyScreen, Navigator, Template} from 'types';

interface changeScreenChosenStatusInterface {
    templateIndex: number
    screenIndex: number
    screen: MyScreen
}

interface changeGeneralNavigationInterface {
    templateIndex: number
    navigator: Navigator
    screens: MyScreen[]
}

const templatesSlice = createSlice({
    name: 'templates',
    initialState: {
        templates: [] as Template[],
    },
    reducers: {
        setTemplates(state, action: PayloadAction<Template[]>) {
            state.templates = action.payload
        },
        addNewTemplate(state, action: PayloadAction<Template>) {
            state.templates.push(action.payload)
        },
        changeTemplateName(state, action: PayloadAction<Template>) {
            state.templates = state.templates.map(template => {
                if (template.name === action.payload.name) {
                    return action.payload
                } else {
                    return template
                }
            })
        },
        changeScreenChosenStatus(state, action: PayloadAction<changeScreenChosenStatusInterface>) {
            state.templates[action.payload.templateIndex].screens[action.payload.screenIndex].chosen = !action.payload.screen.chosen
        },
        addNewScreen(state, action: PayloadAction<changeScreenChosenStatusInterface>) {
            state.templates[action.payload.templateIndex].screens.push(action.payload.screen)
        },
        changeGeneralNavigation(state, action: PayloadAction<changeGeneralNavigationInterface>) {
            state.templates[action.payload.templateIndex].navigator = action.payload.navigator
            state.templates[action.payload.templateIndex].screens = action.payload.screens
        },
        addEmptyBlock(state, action: PayloadAction<number>) {
            state.templates[action.payload].screens = state.templates[action.payload].screens.map(screen => {
                if (screen.chosen) {
                    return {
                        ...screen,
                        emptyBlocks: [...screen.emptyBlocks, emptyBlock]
                    }
                } else {
                    return screen
                }
            })
        },
    }
})

export default templatesSlice.reducer
export const {
    setTemplates,
    addNewTemplate,
    changeTemplateName,
    changeScreenChosenStatus,
    addNewScreen,
    changeGeneralNavigation,
    addEmptyBlock,
} = templatesSlice.actions