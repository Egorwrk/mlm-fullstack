import React from 'react';
import {useDispatch} from 'react-redux';

import 'assets/EditorPage.css'
import {addEmptyBlock} from 'redux/templatesSlice';
import {EditorModeSwitcherType} from '../../types';

interface Props {
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
    templateIndex: number
}

const ToolsbarButtons = (props: Props) => {
    const dispatch = useDispatch()

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
                    CS
                </button>
            </span>
            <span className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => dispatch(addEmptyBlock(props.templateIndex))}>
                    NB
                </button>
            </span>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
            <span className='toolsbarItem'/>
        </body>
    );
};

export default ToolsbarButtons;