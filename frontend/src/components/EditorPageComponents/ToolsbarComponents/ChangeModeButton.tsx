import React from 'react';

import {EditorModeSwitcherType} from 'types';

interface Props {
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
    text: string
    chosenMode: EditorModeSwitcherType
}

const ChangeModeButton = (props: Props) => {
    return (
        <div className='toolsbarItem'>
            <button className='toolsbarItemBtn' onClick={() => props.setEditorModeSwitcher(props.chosenMode)}>
                {props.text}
            </button>
        </div>
    );
};

export default ChangeModeButton;