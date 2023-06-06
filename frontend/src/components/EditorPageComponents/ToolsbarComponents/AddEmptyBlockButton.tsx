import React from 'react';
import {useDispatch} from 'react-redux';

import {addEmptyBlock} from 'store/templatesSlice';

interface Props {
    templateIndex: number
}

const AddEmptyBlockButton = (props: Props) => {
    const dispatch = useDispatch()

    return (
        <div className='toolsbarItem'>
            <button className='toolsbarItemBtn' onClick={() => dispatch(addEmptyBlock(props.templateIndex))}>
                NB
            </button>
        </div>
    );
};

export default AddEmptyBlockButton;