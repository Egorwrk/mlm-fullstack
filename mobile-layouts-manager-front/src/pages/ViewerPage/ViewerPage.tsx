import React, {useEffect, useState} from 'react';

import {List, ListItem} from '@mui/material';

import 'assets/ViewerPage.css';
import ScreenContainer from 'components/ScreenContainer';
import {Device} from '../../../types';

const ViewerPage = (props: any) => {
    const [device, setDevice] = useState<Device>()
    const [chosenScreen, setChosenScreen] = useState<number | null>(null)

    useEffect(() => {
        setDevice(props.location.state.device)
    })

    const navBtnPress = (screenName: string) => {
        let screenIndex = null
        if (device) {
            for (let i = 0; i < device.screens.length; i++) {
                if (device.screens[i].name === screenName) {
                    screenIndex = i
                }
            }
        }
        setChosenScreen(screenIndex)
    }

    return (
        <div className='viewerPageContainer'>
            {device && (chosenScreen || chosenScreen === 0)
                ? <div className='modalScreenViewer'>
                    <span className='topPanel'>
                        <button
                            className='exitBtn'
                            onClick={() => setChosenScreen(null)}
                        >exit</button>
                    </span>

                    <div className='ViewerScreenContainer'>
                        <button
                            className='btnsPrevNextScreen'
                            onClick={() => {
                                if (chosenScreen === 0) {
                                    setChosenScreen(device.screens.length - 1)
                                } else {
                                    setChosenScreen(chosenScreen - 1)
                                }
                            }}
                        >
                            <p>prev</p>
                        </button>
                        <ScreenContainer device={device} screenContent={device.screens[chosenScreen]}
                                         editorModeSwitcher={null} chosenNav={null} navBtnPress={navBtnPress}/>
                        <button
                            className='btnsPrevNextScreen'
                            onClick={() => {
                                if (chosenScreen === device?.screens.length - 1) {
                                    setChosenScreen(0)
                                } else {
                                    setChosenScreen(chosenScreen + 1)
                                }
                            }}
                        >
                            {'next'}
                        </button>
                    </div>
                </div>
                : null
            }

            <List className='screensContainer'>
                {device
                    ? device.screens.map((screen, index) => {
                        return (
                            <ListItem key={screen.name} button={true} onClick={() => {
                                setChosenScreen(index)
                            }}>
                                <ScreenContainer
                                    device={device}
                                    screenContent={screen}
                                    editorModeSwitcher={null}
                                    chosenNav={null}
                                />
                            </ListItem>
                        )
                    })
                    : null
                }
            </List>
        </div>
    )
}

export default ViewerPage;