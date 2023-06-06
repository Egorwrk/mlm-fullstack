import React, {useState} from 'react';

import DrawerMenuComponent from 'components/ScreenContainer/Components/DrawerMenuComponent';
import EmptyBlocks from 'components/ScreenContainer/Components/EmptyBlocks';
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
        <body className='screenContainer'>
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
                    <div className='screenContentWrapper'>
                        {drawerNavigatorMenuShow
                            ? <DrawerMenuComponent
                                screenContent={props.screenContent}
                                navigatorBtnPressed={props.navigatorBtnPressed}/>
                            : null
                        }
                        <EmptyBlocks screenContent={props.screenContent}/>
                    </div>
                </div>

                {props.screenContent && props.screenContent.navigator.bottomTabs
                    ? <BottomTabsContainerComponent
                        screenContent={props.screenContent}
                        editorModeSwitcher={props.editorModeSwitcher}
                        navigatorBtnPressed={props.navigatorBtnPressed}/>
                    : null
                }
            </div>
        </body>
    )
}

export default ScreenContainer