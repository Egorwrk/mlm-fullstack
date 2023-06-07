import React, {useEffect, useState} from 'react';
import {List, ListItemButton} from '@mui/material';
import {useLocation} from 'react-router-dom';

import ScreenContainer from 'components/ScreenContainer/ScreenContainer';
import ModalScreenViewer from 'components/ViewerPageComponents/ModalScreenViewer';
import {Template} from 'types';
import 'css/ViewerPage.css';

const ViewerPage = () => {
    const [template, setTemplate] = useState<Template>()
    const [chosenScreen, setChosenScreen] = useState<number | null>(null)
    const location = useLocation()

    useEffect(() => {
        setTemplate(location.state.template)
    })

    const navigatorBtnPressed = (screenName: string) => {
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
                ? <ModalScreenViewer setChosenScreen={setChosenScreen} chosenScreen={chosenScreen} template={template} navigatorBtnPressed={navigatorBtnPressed}/>
                : null
            }

            <List className='screensContainer'>
                {template
                    ? template.screens.map((screen, index) => {
                        return (
                            <ListItemButton key={screen.name} onClick={() => {
                                setChosenScreen(index)
                            }}>
                                <ScreenContainer
                                    template={template}
                                    screenContent={screen}
                                    editorModeSwitcher={null}
                                    chosenNavigator={null}
                                />
                            </ListItemButton>
                        )
                    })
                    : null
                }
            </List>
        </div>
    )
}

export default ViewerPage;