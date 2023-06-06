import React from 'react';

import {EditorModeSwitcherType, MyScreen} from 'types';

interface Props {
    screenContent: MyScreen
    editorModeSwitcher: EditorModeSwitcherType
    navigatorBtnPressed?: (screenName: string) => void
}

const BottomTabsContainerComponent = (props: Props) => {
    return (
        <>
            {props.screenContent && props.screenContent.navigator.bottomTabs
                ? <div className='bottomTabsContainer'>
                    {props.screenContent.navigator.bottomTabs.map((screenName) => {
                        return (
                            <button
                                key={screenName}
                                className='bottomTabContainer'
                                disabled={!!props.editorModeSwitcher}
                                onClick={() => props.navigatorBtnPressed ? props.navigatorBtnPressed(screenName) : null}
                            >
                                {screenName}
                            </button>
                        )
                    })}
                </div>
                : null
            };
        </>
    )
};

export default BottomTabsContainerComponent;