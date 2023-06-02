import React, {useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from 'store/store';
import {setTemplates} from 'store/templatesSlice';
import TemplateViewer from 'components/TemplatesPageComponents/TemplateViewer';
import CreateNewTemplateModal from 'components/TemplatesPageComponents/CreateNewTemplateModal';
import {axiosApi} from 'api/apiInstance';
import {Template} from 'types';
import 'css/TemplatesPage.css';

const TemplatesPage = () => {
    const [showNewTemplateModalCreator, setShowNewTemplateModalCreator] = useState<boolean>(false);
    const templates: Template[] = useSelector((state: RootState) => state.templatesReducer.templates)
    const dispatch = useDispatch()

    useEffect(() => {
        axiosApi.getTemplates().then((res) => {
            if (res !== 'auth error' && res){
                dispatch(setTemplates(res))
            }
        })
    }, [])

    return <div className='TemplatesPage'>
        {showNewTemplateModalCreator
            ? <CreateNewTemplateModal
                setShowNewTemplateModalCreator={setShowNewTemplateModalCreator}
                templates={templates}
            />
            : null
        }

        <div className='myTemplates'>
            <Grid container>
                {templates
                    ? templates.map((template: Template, index: number) => {
                        return (
                            <Grid
                                container
                                key={template.name}
                                item
                                xs={4}
                                className='gridScreenContainer'
                            >
                                {TemplateViewer(template, index)}
                            </Grid>
                        )
                    })
                    : null
                }
            </Grid>
        </div>
        <div>
            <button
                className='plusBtn'
                onClick={() => setShowNewTemplateModalCreator(true)}
            />
        </div>
    </div>
}

export default TemplatesPage;
