import React, {useEffect, useState} from 'react';

import {Grid} from "@mui/material";

import 'assets/TemplatesPage.css';
import TemplateViewer from 'components/TemplateViewer';
import {defaultTemplate, myTemplates} from 'assets/tempConstants';
import CreateNewTemplateModal from 'components/CreateNewTemplateModal';
import {Template} from '../../../types';

const TemplatesPage = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [showNewTemplateModalCreator, setShowNewTemplateModalCreator] = useState<boolean>(false);
    const [newTemplate, setNewTemplate] = useState<Template>(defaultTemplate);

    useEffect(() => {
        setTemplates(myTemplates);
    }, [])

    return <div className='TemplatesPage'>
        {showNewTemplateModalCreator
            ? <CreateNewTemplateModal
                setShowNewTemplateModalCreator={setShowNewTemplateModalCreator}
                newTemplate={newTemplate}
                templates={templates}
                setTemplates={setTemplates}
                setNewTemplate={setNewTemplate}
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
