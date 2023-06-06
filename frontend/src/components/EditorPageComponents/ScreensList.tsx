import React from 'react';
import {Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import ScreenContainer from 'components/ScreenContainer/ScreenContainer';
import {navigatorUpdater, screenUpdater} from 'utils/ScreenListUtils';
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
        const updatedNavigator = navigatorUpdater(
            props.chosenNavigator === 'bottomTabs'
                ? props.template.navigator.bottomTabs
                : props.template.navigator.drawer,
            name,
            props.chosenNavigator)
        dispatch(changeGeneralNavigation({
            templateIndex: props.templateIndex,
            navigator: {
                bottomTabs: props.chosenNavigator === 'bottomTabs' ? updatedNavigator : props.template.navigator.bottomTabs,
                drawer: props.chosenNavigator === 'bottomTabs' ? props.template.navigator.drawer : updatedNavigator,
            },
            screens: screenUpdater(updatedNavigator, name, props.template, props.chosenNavigator)
        }))
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