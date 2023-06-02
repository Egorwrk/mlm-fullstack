import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import 'assets/EditorPage.css';
import ScreensList from 'components/ScreensList';
import Toolsbar from 'components/Toolsbar';
import {RootState} from 'redux/redux';
import {axiosApi} from 'assets/axiosInstance';
import {setTemplates} from 'redux/templatesSlice';
import {EditorModeSwitcherType, Template} from '../../../types';

const EditorPage = (props: any) => {
    const template: Template = useSelector((state: RootState) => {
        return state.templatesReducer.templates[props.location.state.index]
    })
    const [chosenNavigator, setChosenNavigator] = useState<'bottomTabs' | 'drawer' | null>('bottomTabs')
    const [editorModeSwitcher, setEditorModeSwitcher] = useState<EditorModeSwitcherType>(null)
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
            ? <ScreensList template={template} editorModeSwitcher={editorModeSwitcher} chosenNavigator={chosenNavigator}
                           templateIndex={props.location.state.index}/>
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