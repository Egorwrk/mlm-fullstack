import React, {Dispatch, SetStateAction} from 'react';
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

                <div className="screenContentContainer"></div>

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