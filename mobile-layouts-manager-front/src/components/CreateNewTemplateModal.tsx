import React from 'react';

import {Template} from "../../types";

interface Props {
    setShowNewTemplateModalCreator: React.Dispatch<React.SetStateAction<boolean>>
    templates: Template[]
    setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
    newTemplate: Template
    setNewTemplate: React.Dispatch<React.SetStateAction<Template>>
}

const CreateNewTemplateModal = (props: Props) => {
    const saveTemplate = () => {
        if (props.newTemplate.name && props.newTemplate.devices.phone!.screens[0].name) {
            props.setTemplates([...props.templates, props.newTemplate])
            props.setShowNewTemplateModalCreator(false)
        }
    }

    const changeTemplateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setNewTemplate({
                ...props.newTemplate,
                name: event.target.value
            }
        )
    }

    const changeScreenName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setNewTemplate(
            {
                ...props.newTemplate,
                devices: {
                    phone: {
                        ...props.newTemplate.devices.phone!,
                        screens: [
                            {
                                ...props.newTemplate.devices.phone!.screens[0],
                                name: event.target.value
                            }
                        ]
                    },
                    tablet: null,
                    miniPhone: null
                }
            }
        )
    }

    return (
        <div className='createNewTemplateModal'>
            <span className='topPanel'>
                <button
                    className='exitBtn'
                    onClick={() => props.setShowNewTemplateModalCreator(false)}
                >exit</button>
            </span>
            <div className='createNewTemplateFormContainer'>
                <div className='createNewTemplateForm'>
                    <input
                        className='templateInputField'
                        value={props.newTemplate.name}
                        placeholder={'Template name'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeTemplateName(event)}
                    />
                    <input
                        className='templateInputField'
                        value={props.newTemplate.devices.phone!.screens[0].name}
                        placeholder={'First screen name'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeScreenName(event)}
                    />
                    <span className='templateModalSeparator'/>
                    <button
                        className='templateModalSaveBtn'
                        onClick={() => saveTemplate()}
                    >save</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewTemplateModal;