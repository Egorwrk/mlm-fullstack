import React from 'react';

import EmptyBlocks from 'components/ScreenContainer/Components/EmptyBlocks';
import {MyScreen} from 'types';

interface Props {
    screenContent: MyScreen
    navigatorBtnPressed?: (screenName: string) => void
    drawerNavigatorMenuShow: boolean
}

const DrawerMenuComponent = (props: Props) => {
    return (
        <div className='screenContentWrapper'>
            {props.drawerNavigatorMenuShow
                ? <div className='leftNavMenuContainer'>
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
                : null
            }
            <EmptyBlocks screenContent={props.screenContent}/>
        </div>
    );
};

export default DrawerMenuComponent;