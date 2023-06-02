import React, {useEffect, useState} from 'react';
import {List, ListItem} from '@mui/material';

import ScreenContainer from 'components/ScreenContainer';
import {Template} from 'types';
import 'css/ViewerPage.css';

const ViewerPage = (props: any) => {
    const [template, setTemplate] = useState<Template>()
    const [chosenScreen, setChosenScreen] = useState<number | null>(null)

    useEffect(() => {
        setTemplate(props.location.state.template)
    })

    const navBtnPress = (screenName: string) => {
        let screenIndex = null
        if (template) {
            for (let i = 0; i < template.screens.length; i++) {
                if (template.screens[i].name === screenName) {
                    screenIndex = i
                }
            }
        }
        setChosenScreen(screenIndex)
    }

    return (
        <div className='viewerPageContainer'>
            {template && (chosenScreen || chosenScreen === 0)
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
                                    setChosenScreen(template.screens.length - 1)
                                } else {
                                    setChosenScreen(chosenScreen - 1)
                                }
                            }}
                        >
                            <p>prev</p>
                        </button>
                        <ScreenContainer template={template} screenContent={template.screens[chosenScreen]}
                                         editorModeSwitcher={null} chosenNavigator={null} navigatorBtnPress={navBtnPress}/>
                        <button
                            className='btnsPrevNextScreen'
                            onClick={() => {
                                if (chosenScreen === template?.screens.length - 1) {
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
                {template
                    ? template.screens.map((screen, index) => {
                        return (
                            <ListItem key={screen.name} button={true} onClick={() => {
                                setChosenScreen(index)
                            }}>
                                <ScreenContainer
                                    template={template}
                                    screenContent={screen}
                                    editorModeSwitcher={null}
                                    chosenNavigator={null}
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