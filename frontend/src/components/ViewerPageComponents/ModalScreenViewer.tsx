import React from 'react';

import ScreenContainer from 'components/ScreenContainer/ScreenContainer';
import {Template} from 'types';

interface Props {
    setChosenScreen:  React.Dispatch<React.SetStateAction<number | null>>
    chosenScreen: number
    template: Template
    navigatorBtnPressed: (screenName: string) => void
}

const ModalScreenViewer = (props: Props) => {
    return (
        <div className='modalScreenViewer'>
            <span className='topPanel'>
                <button
                    className='exitBtn'
                    onClick={() => props.setChosenScreen(null)}
                >exit</button>
            </span>

            <div className='ViewerScreenContainer'>
                <button
                    className='btnsPrevNextScreen'
                    onClick={() => {
                        if (props.chosenScreen === 0) {
                            props.setChosenScreen(props.template.screens.length - 1)
                        } else {
                            props.setChosenScreen(props.chosenScreen - 1)
                        }
                    }}
                >prev</button>

                <ScreenContainer template={props.template} screenContent={props.template.screens[props.chosenScreen]}
                                 editorModeSwitcher={null} chosenNavigator={null} navigatorBtnPressed={props.navigatorBtnPressed}/>

                <button
                    className='btnsPrevNextScreen'
                    onClick={() => {
                        if (props.chosenScreen === props.template.screens.length - 1) {
                            props.setChosenScreen(0)
                        } else {
                            props.setChosenScreen(props.chosenScreen + 1)
                        }
                    }}
                >next</button>
            </div>
        </div>
    );
};

export default ModalScreenViewer;