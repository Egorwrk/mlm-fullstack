import React, {useEffect, useState} from "react";
import {myTemplates} from "../../tempConstants"
import "./EditorPage.css";
import {Devices, Template, MyScreen, Device} from "../../../types";
import axios from "axios";
import ScreenContainer from "./components/ScreenContainer";

const EditorPage = (props: any) => {
    const [screens, setScreens] = useState<MyScreen[][]>([])
    const [device, setDevice] = useState<Device>()
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>(null)
    const [choseScreenActive, setChoseScreenActive] = useState<boolean>(true)
    const [chosenScreens, setChosenScreens] = useState<string[]>([])

    const screenReworking = (screens: MyScreen[]): MyScreen[][] => {
        const reworkedScreens: MyScreen[][] = [];
        let oneScreensRow: MyScreen[] = [];
        for (let i = 0; i < screens.length; i++) {
            oneScreensRow.push(screens[i]);
            if ((i + 1) % 3 === 0 || i + 1 === screens.length) {
                reworkedScreens.push(oneScreensRow);
                oneScreensRow = [];
            }
        }

        return reworkedScreens;
    };

    useEffect(() => {
        console.log('props', props)
        let devices: Devices = {
            phone: {
                height: 500,
                width: 300,
                screens: [
                    {
                        nav: {bottomTabs: null, drawer: null, stack: null},
                        bc: 'red'
                    }
                ]
            },
            tablet: null,
            miniPhone: null,
        }

        if (props.location.state) {
            if (props.location.state.name) {
                myTemplates.forEach((value: Template) => {
                    if (value.name === props.location.state.name) {
                        devices = value.devices
                    }
                })
            }

            let reworkedScreens: MyScreen[][] = []
            if (devices) {

                if (devices.phone) {
                    reworkedScreens = screenReworking(devices.phone.screens)
                    setDevice({
                        height: devices.phone.height,
                        width: devices.phone.width,
                        screens: []
                    })
                } else if (devices.tablet) {
                    reworkedScreens = screenReworking(devices.tablet.screens)
                    setDevice({
                        height: devices.tablet.height,
                        width: devices.tablet.width,
                        screens: []
                    })
                } else if (devices.miniPhone) {
                    reworkedScreens = screenReworking(devices.miniPhone.screens)
                    setDevice({
                        height: devices.miniPhone.height,
                        width: devices.miniPhone.width,
                        screens: []
                    })
                }
            }

            setScreens(reworkedScreens);
        } else {
            console.log('else')
        }


    }, [])

    const handleTypeSelect = (e: any) => {
        if (e.value === 'None') {
            setChosenNav(null);
        } else {
            setChosenNav(e.value)
        }

    };

    return <div style={{display: "flex", flex: 1, flexDirection: 'column'}}>
        <div className="toolsbar">
            <div className="toolsbarItem">
                <button className="toolsbarItemBtn" onClick={() => setChoseScreenActive(false)}>
                    <text>N</text>
                </button>
            </div>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>
            <div className="toolsbarItem"/>

            {!choseScreenActive
                ? <div className="select">
                    <select onChange={handleTypeSelect}>
                        <option value="None">None</option>
                        <option value='bottomTabs'>Drawer navigator</option>
                        <option value='drawer'>Bottom tabs navigator</option>
                    </select>
                </div>
                : null
            }

            <div className="prevOkBtnSeparator"/>

            {!choseScreenActive
                ? <button className="okButton" onClick={() => {
                    setChoseScreenActive(true)
                }}>Ok</button>
                : null
            }

        </div>
        {screens.map((value, ind) => {
            return (
                <div key={ind} style={{
                    display: 'flex',
                    textAlign: 'center',
                }}>
                    <ScreenContainer name={(ind * 3 + 1).toString()} device={device} screenContent={value[0]}
                                     choseScreenActive={choseScreenActive}/>
                    <div className="screensSeparator"/>
                    <ScreenContainer name={(ind * 3 + 2).toString()} device={device} screenContent={value[1]}
                                     choseScreenActive={choseScreenActive}/>
                    <div className="screensSeparator"/>
                    <ScreenContainer name={(ind * 3 + 3).toString()} device={device} screenContent={value[2]}
                                     choseScreenActive={choseScreenActive}/>
                </div>
            )
        })}
    </div>
};

export default EditorPage;


// axios.get(`http://localhost:3002/index.php`)
//     .then(res => {
//         console.log(res.data);
//         console.log(res.data.message)
//     })
