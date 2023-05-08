import React, {useState} from 'react';
import {Device, MyScreen} from '../../types';
import '../assets/Components.css';

interface Props {
    device: Device | undefined
    screenContent: MyScreen
    choseScreenActive: boolean
    chosenNav: 'bottomTabs' | 'drawer' | null
    navBtnPress?: (screenName: string) => void
}

const ScreenContainer = (props: Props) => {
    const [drawerNavMenuShow, setDrawerNavMenuShow] = useState<boolean>(false)
    return (
        <div className='screenContainer'>
            <p>{props.screenContent.name}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: props.device?.height,
                width: props.device?.width,
                background: props.screenContent ? props.screenContent.bc : 'transparent'
            }}>

                <div className='screenContentContainer'>
                    <div className='screenTopBar'>
                        <button
                            className='drawerBtn'
                            onClick={() => setDrawerNavMenuShow(!drawerNavMenuShow)}
                            disabled={!props.choseScreenActive}
                        >D
                        </button>
                    </div>
                    <div className='screenContentWrapper'>
                        {drawerNavMenuShow
                            ? <div className='leftNavMenuContainer'>
                                {props.screenContent && props.screenContent.nav.drawer
                                    ? <div className='leftNavMenu'>
                                        {props.screenContent.nav.drawer.map((screenName) => {
                                            return <button
                                                className='drawerNavBtn'
                                                key={screenName}
                                                onClick={() => props.navBtnPress ? props.navBtnPress(screenName) : null}
                                            >{screenName}</button>
                                        })}
                                    </div>
                                    : null
                                }
                            </div>
                            : null
                        }
                    </div>
                </div>

                {props.screenContent && props.screenContent.nav.bottomTabs
                    ? <div className='bottomTabsContainer'>
                        {props.screenContent.nav.bottomTabs.map((screenName) => {
                            return (
                                <button
                                    key={screenName}
                                    className='bottomTabContainer'
                                    disabled={!props.choseScreenActive}
                                    onClick={() => props.navBtnPress ? props.navBtnPress(screenName) : null}
                                >
                                    <p className='tabText'>{screenName}</p>
                                </button>
                            )
                        })}
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ScreenContainer