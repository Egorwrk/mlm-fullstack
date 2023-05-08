import React, {Dispatch, SetStateAction, useState} from 'react';
import {Device, MyScreen} from "../../../../types";
import "./Components.css";

interface Props {
    device: Device | undefined
    screenContent: MyScreen
    choseScreenActive: boolean
    chosenScreensForAddingInNavList: string[]
    setChosenScreensForAddingInNavList: Dispatch<SetStateAction<string[]>>
    chosenNav: 'bottomTabs' | 'drawer' | null
}

const ScreenContainer = (props: Props) => {
    const [drawerNavMenuShow, setDrawerNavMenuShow] = useState<boolean>(false)
    return (
        <div className="screenContainer">
            <text>{props.screenContent.name}</text>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                height: props.device?.height,
                width: props.device?.width,
                background: props.screenContent ? props.screenContent.bc : 'transparent'
            }}>

                <div className="screenContentContainer">
                    <div className='screenTopBar'>
                        <button
                            className='drawerBtn'
                            onClick={() => {
                                setDrawerNavMenuShow(!drawerNavMenuShow)
                            }}
                            disabled={!props.choseScreenActive}
                        >
                            D
                        </button>
                    </div>
                    <div className='screenContentWrapper'>
                        {drawerNavMenuShow
                            ? <div className='leftNavMenuContainer'>
                                {props.screenContent && props.screenContent.nav.drawer
                                    ? <div className='leftNavMenu'>
                                        {props.screenContent.nav.drawer.map((screenName) => {
                                            return <button className='drawerNavBtn'
                                                           key={screenName}>{screenName}</button>
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
                    ? <div className="bottomTabsContainer">
                        {props.screenContent.nav.bottomTabs.map((screen) => {
                            return (
                                <button
                                    key={screen}
                                    className="bottomTabContainer"
                                    disabled={!props.choseScreenActive}>
                                    <text className="tabText">{screen}</text>
                                </button>
                            )
                        })}
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default ScreenContainer;