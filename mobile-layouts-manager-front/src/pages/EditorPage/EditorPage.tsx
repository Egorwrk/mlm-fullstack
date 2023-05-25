import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import 'assets/EditorPage.css';
import ScreensList from 'components/ScreensList';
import Toolsbar from 'components/Toolsbar';
import {RootState} from 'redux/redux';
import {setDevice} from 'redux/workingDeviceSlice';
import {EditorModeSwitcherType} from '../../../types';

const EditorPage = (props: any) => {
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [editorModeSwitcher, setEditorModeSwitcher] = useState<EditorModeSwitcherType>(null)
    const device = useSelector((state: RootState) => state.workingDeviceReducer.workingDevice)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.location.state) {
            dispatch(setDevice(props.location.state.device))
        }
    }, [])

    const handleNavigationSelect = (e: any) => {
        setChosenNav(e.target.value)
    }

    return <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <Toolsbar
            setEditorModeSwitcher={setEditorModeSwitcher}
            editorModeSwitcher={editorModeSwitcher}
            handleTypeSelect={handleNavigationSelect}
            chosenNav={chosenNav}
        />
        {device
            ? <ScreensList device={device} editorModeSwitcher={editorModeSwitcher} chosenNav={chosenNav}/>
            : null
        }
        <Link to={{
            pathname: '/viewer',
            state: {
                device: device ? device : null,
            }
        }}>
            <p>View</p>
        </Link>
    </div>
};

export default EditorPage