import React from 'react';

import {EditorModeSwitcherType} from 'types';

interface Props {
    setDrawerNavigatorMenuShow: React.Dispatch<React.SetStateAction<boolean>>
    drawerNavigatorMenuShow: boolean
    editorModeSwitcher: EditorModeSwitcherType
}

const ScreenTopBarComponent = (props: Props) => {
    return (
        <div className='screenTopBar'>
            <button
                className='drawerBtn'
                onClick={() => props.setDrawerNavigatorMenuShow(!props.drawerNavigatorMenuShow)}
                disabled={!!props.editorModeSwitcher}
            >D
            </button>
        </div>
    );
};

export default ScreenTopBarComponent;