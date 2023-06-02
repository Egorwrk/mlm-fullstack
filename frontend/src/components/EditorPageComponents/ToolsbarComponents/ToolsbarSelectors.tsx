import React from 'react';
import {MenuItem, Select} from '@mui/material';

import {EditorModeSwitcherType} from 'types';

interface Props {
    editorModeSwitcher: EditorModeSwitcherType
    handleTypeSelect: (e: any) => void
    chosenNav: 'bottomTabs' | 'drawer' | null
    screenName: string
    setScreenName: React.Dispatch<React.SetStateAction<string>>
}

const ToolsbarSelectors = (props: Props) => {
    return (
        <body className='toolsbarSelectorsContainer'>
            {props.editorModeSwitcher === 'navigator'
                ? <div className='select'>
                    <Select onChange={props.handleTypeSelect} value={props.chosenNav} style={{height: 30}}>
                        <MenuItem value={'bottomTabs'}>BottomTabs</MenuItem>
                        <MenuItem value={'drawer'}>Drawer</MenuItem>
                    </Select>
                </div>
                : null
            }

            {props.editorModeSwitcher === 'newScreen'
                ? <input value={props.screenName} onChange={(event) => props.setScreenName(event.target.value)}></input>
                : null
            }

        </body>
    );
};

export default ToolsbarSelectors;