import React, {useState} from 'react';

import DrawerMenuComponent from 'components/ScreenContainer/Components/DrawerMenuComponent';
import BottomTabsContainerComponent from 'components/ScreenContainer/Components/BottomTabsContainerComponent';
import ScreenTopBarComponent from 'components/ScreenContainer/Components/ScreenTopBarComponent';
import {EditorModeSwitcherType, MyScreen, Template} from 'types';
import 'css/Components.css';

interface Props {
    template: Template
    screenContent: MyScreen
    editorModeSwitcher: EditorModeSwitcherType
    chosenNavigator: 'bottomTabs' | 'drawer' | null
    navigatorBtnPressed?: (screenName: string) => void
}

const ScreenContainer = (props: Props) => {
    const [drawerNavigatorMenuShow, setDrawerNavigatorMenuShow] = useState<boolean>(false)

    return (
        <div className='screenContainer'>
            {props.screenContent.name}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: props.template.height,
                width: props.template.width,
                background: props.screenContent ? props.screenContent.bc : 'transparent'
            }}>
                <div className='screenContentContainer'>
                    <ScreenTopBarComponent
                        editorModeSwitcher={props.editorModeSwitcher}
                        drawerNavigatorMenuShow={drawerNavigatorMenuShow}
                        setDrawerNavigatorMenuShow={setDrawerNavigatorMenuShow}/>
                    <DrawerMenuComponent
                        screenContent={props.screenContent}
                        navigatorBtnPressed={props.navigatorBtnPressed}
                        drawerNavigatorMenuShow={drawerNavigatorMenuShow}
                    />
                </div>

                {props.screenContent && props.screenContent.navigator.bottomTabs
                    ? <BottomTabsContainerComponent
                        screenContent={props.screenContent}
                        editorModeSwitcher={props.editorModeSwitcher}
                        navigatorBtnPressed={props.navigatorBtnPressed}/>
                    : null
                }
            </div>
        </div>
    )
}

export default ScreenContainer