import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import ScreensList from 'components/EditorPageComponents/ScreensList';
import Toolsbar from 'components/EditorPageComponents/Toolsbar';
import {RootState} from 'store/store';
import {axiosApi} from 'api/apiInstance';
import {setTemplates} from 'store/templatesSlice';
import {EditorModeSwitcherType, Template} from 'types';
import 'css/EditorPage.css';

const EditorPage = () => {
    const location = useLocation()
    const template: Template = useSelector((state: RootState) => {
        return state.templatesReducer.templates[location.state.index]
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
            templateIndex={location.state.index}
        />
        {template
            ? <ScreensList template={template} editorModeSwitcher={editorModeSwitcher} chosenNavigator={chosenNavigator}
                           templateIndex={location.state.index}/>
            : null
        }
        <Link to={{pathname: '/main/viewer',}}
              state={{template: template}}
        >
            <p>View</p>
        </Link>
    </div>
};

export default EditorPage