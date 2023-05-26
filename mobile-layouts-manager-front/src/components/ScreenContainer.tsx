import React, {useState} from 'react';

import 'assets/Components.css';
import {EditorModeSwitcherType, MyScreen, Template} from '../../types';

interface Props {
    template: Template
    screenContent: MyScreen
    editorModeSwitcher: EditorModeSwitcherType
    chosenNavigator: 'bottomTabs' | 'drawer' | null
    navigatorBtnPress?: (screenName: string) => void
}

const ScreenContainer = (props: Props) => {
    const [drawerNavigatorMenuShow, setDrawerNavigatorMenuShow] = useState<boolean>(false)

    return (
        <body className='screenContainer'>
            <p>{props.screenContent.name}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: props.template.height,
                width: props.template.width,
                background: props.screenContent ? props.screenContent.bc : 'transparent'
            }}>
                <div className='screenContentContainer'>
                    <header className='screenTopBar'>
                        <button
                            className='drawerBtn'
                            onClick={() => setDrawerNavigatorMenuShow(!drawerNavigatorMenuShow)}
                            disabled={!!props.editorModeSwitcher}
                        >D
                        </button>
                    </header>
                    <div className='screenContentWrapper'>
                        {drawerNavigatorMenuShow
                            ? <div className='leftNavMenuContainer'>
                                {props.screenContent && props.screenContent.navigator.drawer
                                    ? <div className='leftNavMenu'>
                                        {props.screenContent.navigator.drawer.map((screenName) => {
                                            return <button
                                                className='drawerNavBtn'
                                                key={screenName}
                                                onClick={() => props.navigatorBtnPress ? props.navigatorBtnPress(screenName) : null}
                                            >{screenName}</button>
                                        })}
                                    </div>
                                    : null
                                }
                            </div>
                            : null
                        }
                        {props.screenContent.emptyBlocks[0]
                            ? props.screenContent.emptyBlocks.map((block, index) => {
                                return <div key={index}
                                            style={{
                                                height: block.height,
                                                width: block.width,
                                                position: 'relative',
                                                left: block.left,
                                                top: block.top,
                                                border: '1px solid black',
                                            }}
                                />
                            })
                            : null}
                    </div>
                </div>

                {props.screenContent && props.screenContent.navigator.bottomTabs
                    ? <footer className='bottomTabsContainer'>
                        {props.screenContent.navigator.bottomTabs.map((screenName) => {
                            return (
                                <button
                                    key={screenName}
                                    className='bottomTabContainer'
                                    disabled={!!props.editorModeSwitcher}
                                    onClick={() => props.navigatorBtnPress ? props.navigatorBtnPress(screenName) : null}
                                >
                                    {screenName}
                                </button>
                            )
                        })}
                    </footer>
                    : null
                }
            </div>
        </body>
    )
}

export default ScreenContainer