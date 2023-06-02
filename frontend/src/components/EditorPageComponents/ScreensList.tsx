import React from 'react';
import {Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import ScreenContainer from 'components/ScreenContainer';
import {changeGeneralNavigation, changeScreenChosenStatus} from 'store/templatesSlice';
import {EditorModeSwitcherType, MyScreen, Template} from 'types';

interface Props {
    template: Template
    editorModeSwitcher: EditorModeSwitcherType
    chosenNavigator: 'bottomTabs' | 'drawer' | null
    templateIndex: number
}

const ScreensList = (props: Props) => {
    const dispatch = useDispatch()

    const addOrDeleteScreenFromNavigatorList = (name: string) => {
        if (props.template) {
            navigatorEditor(props.chosenNavigator === 'bottomTabs' ? props.template.navigator.bottomTabs : props.template.navigator.drawer, name)
        }
    }

    const navigatorEditor = (tmpNavigatorsList: string[] | null, name: string) => {
        let updatedNavigator = tmpNavigatorsList ? [...tmpNavigatorsList] : null
        if (updatedNavigator) {
            if (updatedNavigator.length === (filterNavigatorList(updatedNavigator, name)).length) {
                if (props.chosenNavigator === 'bottomTabs' && updatedNavigator.length >= 5) {
                    alert('You already have 5 screens')
                } else {
                    updatedNavigator.push(name)
                }
            } else {
                if (filterNavigatorList(updatedNavigator, name).length === 0) {
                    updatedNavigator = null
                } else {
                    updatedNavigator = filterNavigatorList(updatedNavigator, name)
                }
            }

        } else {
            updatedNavigator = [name]
        }
        dispatch(changeGeneralNavigation({
            templateIndex: props.templateIndex,
            navigator: {
                bottomTabs: props.chosenNavigator === 'bottomTabs' ? updatedNavigator : props.template.navigator.bottomTabs,
                drawer: props.chosenNavigator === 'bottomTabs' ? props.template.navigator.drawer : updatedNavigator,
            },
            screens: screenUpdate(updatedNavigator, name)
        }))
    }

    const filterNavigatorList = (navigatorList: string[], name: string) => {
        return navigatorList.filter((el) => {
            return el !== name
        })
    }

    const screenUpdate = (updatedNavigator: string[] | null, name: string) => {
        return props.template.screens.map((screen): MyScreen => {
            if (screen.name === name && updatedNavigator && updatedNavigator.length > 0) {
                for (let i = 0; i < updatedNavigator.length; i++) {
                    if (updatedNavigator[i] === name) {
                        return {
                            ...screen,
                            navigator: {
                                bottomTabs: props.chosenNavigator === 'bottomTabs' ? updatedNavigator : screen.navigator.bottomTabs,
                                drawer: props.chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : updatedNavigator
                            }
                        }
                    }
                }
                return {
                    ...screen,
                    navigator: {
                        bottomTabs: props.chosenNavigator === 'bottomTabs' ? null : screen.navigator.bottomTabs,
                        drawer: props.chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : null
                    }
                }
            }
            if ((props.chosenNavigator === 'bottomTabs' && screen.navigator.bottomTabs) || (props.chosenNavigator === 'drawer' && screen.navigator.drawer) || screen.name === name) {
                return {
                    ...screen,
                    navigator: {
                        bottomTabs: props.chosenNavigator === 'bottomTabs' ? updatedNavigator : screen.navigator.bottomTabs,
                        drawer: props.chosenNavigator === 'bottomTabs' ? screen.navigator.drawer : updatedNavigator
                    }
                }
            } else {
                return screen
            }
        })
    }

    const choseThisScreen = (screen: MyScreen, screenIndex: number) => {
        dispatch(changeScreenChosenStatus({
            templateIndex: props.templateIndex,
            screenIndex: screenIndex,
            screen: screen
        }))
    }

    return (
        <Grid container>
            {props.template.screens
                ? props.template.screens.map((screen: MyScreen, screenIndex) => {
                    return (
                        <Grid
                            container
                            key={screen.name}
                            item
                            xs={4}
                            className='gridScreenContainer'
                        >
                            <button
                                className='btnScreenContainer'
                                onClick={() => props.editorModeSwitcher === 'navigator'
                                    ? addOrDeleteScreenFromNavigatorList(screen.name)
                                    : choseThisScreen(screen, screenIndex)
                                }
                                disabled={!props.editorModeSwitcher}
                                style={{background: screen.chosen ? 'yellow' : 'gray'}}
                            >
                                <ScreenContainer
                                    template={props.template}
                                    screenContent={screen}
                                    editorModeSwitcher={props.editorModeSwitcher}
                                    chosenNavigator={props.chosenNavigator}
                                />
                            </button>
                        </Grid>
                    )
                })
                : null
            }
        </Grid>
    );
};

export default ScreensList;