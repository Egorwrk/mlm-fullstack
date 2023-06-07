import React from 'react';

import ChangeModeButton from 'components/EditorPageComponents/ToolsbarComponents/ChangeModeButton';
import AddEmptyBlockButton from 'components/EditorPageComponents/ToolsbarComponents/AddEmptyBlockButton';
import {EditorModeSwitcherType} from 'types';
import 'css/EditorPage.css'

interface Props {
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
    templateIndex: number
}

const ToolsbarButtons = (props: Props) => {

    return (
        <div className='toolsbarButtonsContainer'>
            <ChangeModeButton setEditorModeSwitcher={props.setEditorModeSwitcher} text={'N'} chosenMode={'navigator'}/>
            <ChangeModeButton setEditorModeSwitcher={props.setEditorModeSwitcher} text={'NS'} chosenMode={'newScreen'}/>
            <ChangeModeButton setEditorModeSwitcher={props.setEditorModeSwitcher} text={'CS'} chosenMode={'multisetMode'}/>
            <AddEmptyBlockButton setEditorModeSwitcher={props.setEditorModeSwitcher} templateIndex={props.templateIndex}/>
        </div>
    );
};

export default ToolsbarButtons;