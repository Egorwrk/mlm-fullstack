import React from 'react';

import 'assets/EditorPage.css'
import {EditorModeSwitcherType} from '../../types';

interface Props {
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
}

const ToolsbarButtons = (props: Props) => {
    return (
        <body className='toolsbarButtonsContainer'>
            <span className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setEditorModeSwitcher('navigator')}>
                    N
                </button>
            </span>
            <span className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setEditorModeSwitcher('newScreen')}>
                    NS
                </button>
            </span>
            <span className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setEditorModeSwitcher('multisetMode')}>
                    MS
                </button>
            </span>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
        </body>
    );
};

export default ToolsbarButtons;