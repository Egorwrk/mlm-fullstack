import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import 'assets/EditorPage.css';
import {Device} from "../../../types";
import ScreensList from "../../components/ScreensList";
import Toolsbar from "../../components/Toolsbar";

const EditorPage = (props: any) => {
    const [device, setDevice] = useState<Device>()
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [choseScreenActive, setChoseScreenActive] = useState<boolean>(true)

    useEffect(() => {
        if (props.location.state) {
            setDevice(props.location.state.device)
        }
    }, [])

    const handleTypeSelect = (e: any) => {
        setChosenNav(e.target.value)
    }

    return <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <Toolsbar setChoseScreenActive={setChoseScreenActive} choseScreenActive={choseScreenActive} handleTypeSelect={handleTypeSelect} chosenNav={chosenNav}/>
        <ScreensList device={device} choseScreenActive={choseScreenActive} chosenNav={chosenNav} setDevice={setDevice}/>
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