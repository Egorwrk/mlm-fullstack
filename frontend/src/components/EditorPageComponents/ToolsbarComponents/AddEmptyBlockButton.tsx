import React from 'react';
import {useDispatch} from 'react-redux';

import {addEmptyBlock} from 'store/templatesSlice';
import {EditorModeSwitcherType} from 'types';

interface Props {
    templateIndex: number
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
}

const AddEmptyBlockButton = (props: Props) => {
    const dispatch = useDispatch()

    return (
        <div className='toolsbarItem'>
            <button className='toolsbarItemBtn' onClick={() => {
                dispatch(addEmptyBlock(props.templateIndex))
                props.setEditorModeSwitcher(null)
            }}
            >NB
            </button>
        </div>
    );
};

export default AddEmptyBlockButton;