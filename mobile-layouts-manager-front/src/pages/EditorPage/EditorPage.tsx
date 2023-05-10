import React, {useEffect, useState} from 'react';
import '../../assets/EditorPage.css';
import {MyScreen, Device} from '../../../types';
import ScreenContainer from '../../components/ScreenContainer';
import {Grid} from '@mui/material'
import {Select, MenuItem} from '@mui/material';
import {Link} from 'react-router-dom';

const EditorPage = (props: any) => {
    const [device, setDevice] = useState<Device>()
    const [chosenNav, setChosenNav] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [choseScreenActive, setChoseScreenActive] = useState<boolean>(true)

    useEffect(() => {
        if (props.location.state) {
            setDevice(props.location.state.device)
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
            let updatedScreens: MyScreen[]
            if (chosenNav === 'bottomTabs') {
                if (updatedNav.bottomTabs) {
                    if (updatedNav.bottomTabs.length === filterNavList(updatedNav.bottomTabs, name).length) {
                        if (updatedNav.bottomTabs.length >= 5) {
                            alert('You already have 5 screens')
                        } else {
                            updatedNav.bottomTabs.push(name)
                        }
                    } else {
                        updatedNav.bottomTabs = filterNavList(updatedNav.bottomTabs, name)
                    }
                } else {
                    updatedNav.bottomTabs = [name]
                }
                updatedScreens = device.screens.map((screen): MyScreen => {
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
                                    drawer: screen.nav.drawer
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
                updatedScreens = device.screens.map((screen): MyScreen => {
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
            }
            setDevice({
                height: device.height,
                width: device.width,
                nav: updatedNav,
                screens: updatedScreens
            })
            setDevice({
                ...device,
                screens: updatedScreens
            })
        }
    }

    const handleTypeSelect = (e: any) => {
        setChosenNav(e.target.value)
    };

    return <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div className='toolsbar'>
            <div className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => setChoseScreenActive(false)}>
                    <p>N</p>
                </button>
            </div>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>

            {!choseScreenActive
                ? <div className='select'>
                    <Select onChange={handleTypeSelect} value={chosenNav} style={{height: 30}}>
                        <MenuItem value={'bottomTabs'}>BottomTabs</MenuItem>
                        <MenuItem value={'drawer'}>Drawer</MenuItem>
                    </Select>
                </div>
                : null
            }

            <div className='prevOkBtnSeparator'/>

            {!choseScreenActive
                ? <button
                    className='okButton'
                    onClick={() => setChoseScreenActive(true)}>Ok</button>
                : null
            }

        </div>
        <Grid container>
            {device
                ? device.screens.map((screen: MyScreen) => {
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
                                disabled={choseScreenActive}
                            >
                                <ScreenContainer
                                    device={device}
                                    screenContent={screen}
                                    choseScreenActive={choseScreenActive}
                                    chosenNav={chosenNav}
                                />
                            </button>
                        </Grid>
                    )
                })
                : null
            }

        </Grid>
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