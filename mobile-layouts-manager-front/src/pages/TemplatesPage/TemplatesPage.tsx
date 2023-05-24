import React, {useEffect, useState} from 'react';

import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import 'assets/TemplatesPage.css';
import {RootState} from "redux/redux";
import {setTemplates} from "redux/templatesSlice";
import TemplateViewer from 'components/TemplateViewer';
import CreateNewTemplateModal from 'components/CreateNewTemplateModal';
import {Template} from '../../../types';
import {axiosApi} from "assets/axiosInstance";

const TemplatesPage = () => {
    const [showNewTemplateModalCreator, setShowNewTemplateModalCreator] = useState<boolean>(false);
    const templates: Template[] = useSelector((state: RootState) => state.templates.templates)
    const dispatch = useDispatch()

    useEffect(() => {
        axiosApi.getTemplates().then((res) => {
            dispatch(setTemplates(res))
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
                    ? templates.map((template: Template) => {
                        return (
                            <Grid
                                container
                                key={template.name}
                                item
                                xs={4}
                                className='gridScreenContainer'
                            >
                                {TemplateViewer(template)}
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
