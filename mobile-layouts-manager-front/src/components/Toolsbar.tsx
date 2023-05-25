import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ToolsbarSelectors from 'components/ToolsbarSelectors';
import ToolsbarButtons from 'components/ToolsbarButtons';
import {RootState} from 'redux/redux';
import {addScreen} from 'redux/workingDeviceSlice';
import {emptyPhoneScreen} from 'assets/emptyMockups';
import {EditorModeSwitcherType} from '../../types';

interface Props {
    setEditorModeSwitcher: React.Dispatch<React.SetStateAction<EditorModeSwitcherType>>
    editorModeSwitcher: EditorModeSwitcherType
    handleTypeSelect: (e: any) => void
    chosenNav: 'bottomTabs' | 'drawer' | null
}

const Toolsbar = (props: Props) => {
    const [screenName, setScreenName] = useState<string>('')
    const workingDevice = useSelector((state: RootState) => state.workingDeviceReducer.workingDevice)
    const dispatch = useDispatch()

    const okButtonPressed = () => {
        if (props.editorModeSwitcher === 'newScreen' && screenName) {
            let screenWithThisNameAlreadyExist = false
            for (let i = 0; i < workingDevice.screens.length; i++) {
                if (workingDevice.screens[i].name === screenName) {
                    screenWithThisNameAlreadyExist = true
                }
            }
            if (!screenWithThisNameAlreadyExist) {
                dispatch(addScreen({...emptyPhoneScreen, name: screenName}))
                setScreenName('')
                props.setEditorModeSwitcher(null)
            } else {
                alert('screen with this name already exist')
            }

        }
        if (props.editorModeSwitcher === 'navigator') {
            props.setEditorModeSwitcher(null)
        }
    }

    return (
        <body className='toolsbar'>
            <ToolsbarButtons setEditorModeSwitcher={props.setEditorModeSwitcher}/>

            <ToolsbarSelectors
                editorModeSwitcher={props.editorModeSwitcher}
                chosenNav={props.chosenNav}
                handleTypeSelect={props.handleTypeSelect}
                screenName={screenName}
                setScreenName={setScreenName}
            />

            <div className='prevOkBtnSeparator'/>

            {props.editorModeSwitcher
                ? <button
                    className='okButton'
                    onClick={() => okButtonPressed()}>Ok</button>
                : null
            }
        </body>
    );
};

export default Toolsbar;