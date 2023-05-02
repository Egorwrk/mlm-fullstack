import React from 'react';
import {Device, MyScreen} from "../../../../types";
import "./Components.css";

interface Props {
    name: string
    device: Device | undefined
    screenContent: MyScreen
    choseScreenActive: boolean
}

const ScreenContainer = (props: Props) => {
    return (
        <button onClick={() => console.log(321)} className="screenContainer" disabled={props.choseScreenActive}>
            <text>{props.screenContent ? props.name : ''}</text>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                height: props.device?.height,
                width: props.device?.width,
                background: props.screenContent ? props.screenContent.bc : 'transparent'
            }}>

                <div className="screenContentContainer">

                </div>

                {props.screenContent && props.screenContent.nav.bottomTabs
                    ? <div className="bottomTabsContainer">
                        {props.screenContent.nav.bottomTabs.map((screen) => {
                            return (
                                <button
                                    onClick={() => {
                                        console.log('NavBtnPressed')
                                    }}
                                    key={screen}
                                    className="bottomTabContainer"
                                    disabled={!props.choseScreenActive}>
                                    <text className="tabText">{screen}</text>
                                </button>
                            )
                        })
                        }
                    </div>
                    : null
                }
            </div>
        </button>
    );
};

export default ScreenContainer;