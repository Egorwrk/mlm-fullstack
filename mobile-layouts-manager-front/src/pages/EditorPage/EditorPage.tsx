import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RectangleSelection from "react-rectangle-selection"

import 'assets/EditorPage.css';
import ScreensList from 'components/ScreensList';
import Toolsbar from 'components/Toolsbar';
import {RootState} from 'redux/redux';
import {axiosApi} from 'assets/axiosInstance';
import {setTemplates} from 'redux/templatesSlice';
import {EditorModeSwitcherType, Template} from '../../../types';

interface Coordinates {
    origin: [number, number]
    target: [number, number]
}

const EditorPage = (props: any) => {
    const template: Template = useSelector((state: RootState) => {
        return state.templatesReducer.templates[props.location.state.index]
    })
    const [chosenNavigator, setChosenNavigator] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [editorModeSwitcher, setEditorModeSwitcher] = useState<EditorModeSwitcherType>(null)
    const [coordinates, setCoordinates] = useState<Coordinates>({origin: [0, 0], target: [0, 0]})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!template) {
            axiosApi.getTemplates().then((res) => {
                dispatch(setTemplates(res))
            })
        }
    }, [])

    const handleNavigationSelect = (e: any) => {
        setChosenNavigator(e.target.value)
    }

    return <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <Toolsbar
            template={template}
            setEditorModeSwitcher={setEditorModeSwitcher}
            editorModeSwitcher={editorModeSwitcher}
            handleTypeSelect={handleNavigationSelect}
            chosenNav={chosenNavigator}
            templateIndex={props.location.state.index}
        />
        {template
            ? <RectangleSelection
                onSelect={(e: any, coords: Coordinates) => {
                    console.log('e:', e)
                    console.log(coordinates)
                    setCoordinates({
                        origin: coords.origin,
                        target: coords.target
                    });
                }}
                style={{
                    backgroundColor: "rgba(0,0,255,0.4)",
                    borderColor: "blue"
                }}
                // onMouseUp={() => {}}
            >
                <ScreensList template={template} editorModeSwitcher={editorModeSwitcher} chosenNavigator={chosenNavigator}
                             templateIndex={props.location.state.index}/>
            </RectangleSelection>

            : null
        }
        <Link to={{
            pathname: '/viewer',
            state: {
                template: template
            }
        }}>
            <p>View</p>
        </Link>

    </div>
};

export default EditorPage