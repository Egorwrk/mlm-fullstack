import React from 'react';
import {Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import ScreenContainer from 'components/ScreenContainer';
import {setDevice} from 'redux/workingDeviceSlice';
import {Device, EditorModeSwitcherType, MyScreen} from '../../types';

interface Props {
    device: Device
    editorModeSwitcher: EditorModeSwitcherType
    chosenNav: 'bottomTabs' | 'drawer' | null
}

const ScreensList = (props: Props) => {
    const dispatch = useDispatch()

    const addOrDeleteScreenFromNavList = (name: string) => {
        if (props.device) {
            navigationEditor(props.chosenNav === 'bottomTabs' ? props.device.nav.bottomTabs : props.device.nav.drawer, name)
        }
    }


    const navigationEditor = (updatedNavigation: string[] | null, name: string) => {
        if (updatedNavigation) {
            if (updatedNavigation.length === (filterNavList(updatedNavigation, name)).length) {
                if (props.chosenNav === 'bottomTabs' && updatedNavigation.length >= 5) {
                    alert('You already have 5 screens')
                } else {
                    updatedNavigation.push(name)
                }
            } else {
                if (filterNavList(updatedNavigation, name).length === 0) {
                    updatedNavigation = null
                } else {
                    updatedNavigation = filterNavList(updatedNavigation, name)
                }
            }
        } else {
            updatedNavigation = [name]
        }
        dispatch(setDevice({
            height: props.device.height,
            width: props.device.width,
            nav: {
                bottomTabs: props.chosenNav === 'bottomTabs' ? updatedNavigation : props.device.nav.bottomTabs,
                drawer: props.chosenNav === 'bottomTabs' ? props.device.nav.drawer : updatedNavigation,
            },
            screens: screenUpdate(updatedNavigation, name)
        }))
    }

    const filterNavList = (navList: string[], name: string) => {
        return navList.filter((el) => {
            return el !== name
        })
    }

    const screenUpdate = (updatedNavigation: string[] | null, name: string) => {
        return props.device.screens.map((screen): MyScreen => {
            if (screen.name === name && updatedNavigation && updatedNavigation.length > 0) {
                for (let i = 0; i < updatedNavigation.length; i++) {
                    if (updatedNavigation[i] === name) {
                        return {
                            ...screen,
                            nav: {
                                bottomTabs: props.chosenNav === 'bottomTabs' ? updatedNavigation : screen.nav.bottomTabs,
                                drawer: props.chosenNav === 'bottomTabs' ? screen.nav.drawer : updatedNavigation
                            }
                        }
                    }
                }
                return {
                    ...screen,
                    nav: {
                        bottomTabs: props.chosenNav === 'bottomTabs' ? null : screen.nav.bottomTabs,
                        drawer: props.chosenNav === 'bottomTabs' ? screen.nav.drawer : null
                    }
                }
            }
            if ((props.chosenNav === 'bottomTabs' && screen.nav.bottomTabs) || (props.chosenNav === 'drawer' && screen.nav.drawer) || screen.name === name) {
                return {
                    ...screen,
                    nav: {
                        bottomTabs: props.chosenNav === 'bottomTabs' ? updatedNavigation : screen.nav.bottomTabs,
                        drawer: props.chosenNav === 'bottomTabs' ? screen.nav.drawer : updatedNavigation
                    }
                }
            } else {
                return screen
            }
        })
    }

    return (
        <Grid container>
            {props.device.screens
                ? props.device.screens.map((screen: MyScreen) => {
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
                                onClick={() => addOrDeleteScreenFromNavList(screen.name)}
                                disabled={!props.editorModeSwitcher}
                            >
                                <ScreenContainer
                                    device={props.device}
                                    screenContent={screen}
                                    editorModeSwitcher={props.editorModeSwitcher}
                                    chosenNav={props.chosenNav}
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