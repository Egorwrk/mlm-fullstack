import React, {useEffect, useState} from "react";
import {myTemplates} from "../../assets/tempConstants"
import "../../assets/EditorPage.css";
import {Devices, Template, MyScreen, Device} from "../../../types";
import ScreenContainer from "../../components/ScreenContainer";
import {Grid} from '@mui/material'
import {Select, MenuItem} from '@mui/material';

const EditorPage = (props: any) => {
    const [screens, setScreens] = useState<MyScreen[]>([])
    const [device, setDevice] = useState<Device>()
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>(null)
    const [choseScreenActive, setChoseScreenActive] = useState<boolean>(true)
    const [chosenScreensForAddingInNavList, setChosenScreensForAddingInNavList] = useState<string[]>([])

    useEffect(() => {
        setScreens(props.location.state.device.screens)
        let devices: Devices = {
            phone: {
                height: 500,
                width: 300,
                screens: [
                    {
                        name: '100',
                        nav: {bottomTabs: null, drawer: null},
                        bc: 'red'
                    }
                ],
                nav: {bottomTabs: null, drawer: null},
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
            if (devices) {
                if (devices.phone) {
                    setDevice({
                        height: devices.phone.height,
                        width: devices.phone.width,
                        screens: [],
                        nav: {bottomTabs: ['1', '2', '5'], drawer: null}
                    })
                } else if (devices.tablet) {
                    setDevice({
                        height: devices.tablet.height,
                        width: devices.tablet.width,
                        screens: [],
                        nav: {bottomTabs: null, drawer: null}
                    })
                } else if (devices.miniPhone) {
                    setDevice({
                        height: devices.miniPhone.height,
                        width: devices.miniPhone.width,
                        screens: [],
                        nav: {bottomTabs: null, drawer: null}
                    })
                }
            }
        }
    }, [])

    const filterNavList = (navList: string[], name: string) => {
        return navList.filter((el) => {
            return el !== name
        })
    }

    const addOrDeleteScreenFromNavList = (name: string) => {
        if (device) {
            const updatedNav = device.nav
            if (chosenNav === 'bottomTabs') {
                if (updatedNav.bottomTabs) {
                    if (updatedNav.bottomTabs.length === filterNavList(updatedNav.bottomTabs, name).length) {
                        if (updatedNav.bottomTabs.length >= 5) {
                            alert("You already have 5 screens")
                        } else {
                            updatedNav.bottomTabs.push(name)
                        }
                    } else {
                        updatedNav.bottomTabs = filterNavList(updatedNav.bottomTabs, name)
                    }
                } else {
                    updatedNav.bottomTabs = [name]
                }
                const updatedScreens: MyScreen[] = screens.map((screen): MyScreen => {
                    if (screen.name === name) {
                        if (updatedNav.bottomTabs && updatedNav.bottomTabs.length > 0) {
                            for (let i = 0; i < updatedNav.bottomTabs.length; i++) {
                                if (updatedNav.bottomTabs[i] === name) {
                                    return {
                                        ...screen,
                                        nav: {
                                            bottomTabs: updatedNav.bottomTabs,
                                            drawer: screen.nav.drawer
                                        }
                                    }
                                }
                            }
                            return {
                                ...screen,
                                nav: {
                                    bottomTabs: null,
                                    drawer: updatedNav.drawer
                                }
                            }
                        }

                    }
                    if (screen.nav.bottomTabs || screen.name === name) {
                        return {
                            ...screen,
                            nav: {
                                bottomTabs: updatedNav.bottomTabs,
                                drawer: screen.nav.drawer
                            }
                        }
                    } else {
                        return screen
                    }
                })
                setDevice({
                    height: device.height,
                    width: device.width,
                    nav: updatedNav,
                    screens: updatedScreens
                })
                setScreens(updatedScreens)
            } else {
                if (updatedNav.drawer) {
                    if (updatedNav.drawer.length === filterNavList(updatedNav.drawer, name).length) {
                        updatedNav.drawer.push(name)
                    } else {
                        updatedNav.drawer = filterNavList(updatedNav.drawer, name)
                    }
                } else {
                    updatedNav.drawer = [name]
                }
                const updatedScreens: MyScreen[] = screens.map((screen): MyScreen => {
                    if (screen.name === name) {
                        if (updatedNav.drawer && updatedNav.drawer.length > 0) {
                            for (let i = 0; i < updatedNav.drawer.length; i++) {
                                if (updatedNav.drawer[i] === name) {
                                    return {
                                        ...screen,
                                        nav: {
                                            bottomTabs: screen.nav.bottomTabs,
                                            drawer: updatedNav.drawer
                                        }
                                    }
                                }
                            }
                            return {
                                ...screen,
                                nav: {
                                    bottomTabs: screen.nav.bottomTabs,
                                    drawer: null
                                }
                            }
                        }

                    }
                    if (screen.nav.drawer || screen.name === name) {
                        return {
                            ...screen,
                            nav: {
                                bottomTabs: screen.nav.bottomTabs,
                                drawer: updatedNav.drawer
                            }
                        }
                    } else {
                        return screen
                    }
                })
                setDevice({
                    height: device.height,
                    width: device.width,
                    nav: updatedNav,
                    screens: updatedScreens
                })
                setScreens(updatedScreens)
            }
        }
    }

    const handleTypeSelect = (e: any) => {
        setChosenNav(e.target.value)
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
                    <Select onChange={handleTypeSelect}>
                        <MenuItem value={'bottomTabs'}>bottomTabs</MenuItem>
                        <MenuItem value={'drawer'}>drawer</MenuItem>
                    </Select>
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
        <Grid container className="gridContainer">
            {screens.map((screen: MyScreen) => {
                return (
                    <Grid
                        container
                        key={screen.name}
                        item
                        xs={4}
                        className="gridScreenContainer"
                    >
                        <button
                            className="btnScreenContainer"
                            onClick={() => addOrDeleteScreenFromNavList(screen.name)}
                            disabled={choseScreenActive}
                        >
                            <ScreenContainer
                                device={device}
                                screenContent={screen}
                                choseScreenActive={choseScreenActive}
                                chosenScreensForAddingInNavList={chosenScreensForAddingInNavList}
                                setChosenScreensForAddingInNavList={setChosenScreensForAddingInNavList}
                                chosenNav={chosenNav}
                            />
                        </button>
                    </Grid>
                )
            })}
        </Grid>
    </div>
};

export default EditorPage