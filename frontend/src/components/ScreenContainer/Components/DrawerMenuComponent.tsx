import React from 'react';

import {MyScreen} from 'types';

interface Props {
    screenContent: MyScreen
    navigatorBtnPressed?: (screenName: string) => void
}

const DrawerMenuComponent = (props: Props) => {
    return (
        <div className='leftNavMenuContainer'>
            {props.screenContent && props.screenContent.navigator.drawer
                ? <div className='leftNavMenu'>
                    {props.screenContent.navigator.drawer.map((screenName) => {
                        return <button
                            className='drawerNavBtn'
                            key={screenName}
                            onClick={() => props.navigatorBtnPressed ? props.navigatorBtnPressed(screenName) : null}
                        >{screenName}</button>
                    })}
                </div>
                : null
            }
        </div>
    );
};

export default DrawerMenuComponent;