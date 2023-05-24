import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import 'assets/EditorPage.css';
import ScreensList from 'components/ScreensList';
import Toolsbar from 'components/Toolsbar';
import {Device} from '../../../types';

const EditorPage = (props: any) => {
    const [device, setDevice] = useState<Device>()
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [navigationModeActive, setNavigationModeActive] = useState<boolean>(true)
    const [addNewScreenMode, setAddNewScreenMode] = useState<boolean>(false)


    useEffect(() => {
        if (props.location.state) {
            setDevice(props.location.state.device)
        }
    }, [])

    const handleNavigationSelect = (e: any) => {
        setChosenNav(e.target.value)
    }

    return <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>

        <Toolsbar
            setNavigationModeActive={setNavigationModeActive}
            navigationModeActive={navigationModeActive}
            handleTypeSelect={handleNavigationSelect}
            chosenNav={chosenNav}
            setAddNewScreenMode={setAddNewScreenMode}
            addNewScreenMode={addNewScreenMode}
        />
        <ScreensList device={device} navigationModeActive={navigationModeActive} chosenNav={chosenNav}
                     setDevice={setDevice}/>
        <Link to={{
            pathname: '/viewer',
            state: {
                device: device,
            }
        }}>
            <p>View</p>
        </Link>
    </div>
};

export default EditorPage