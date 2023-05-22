import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import 'assets/TemplatesPage.css';
import {myTemplates} from 'assets/tempConstants';
import {Template, MyScreen, Device} from '../../../types';

const TemplateViewer = (template: Template) => {
    return (
        <div key={template.name} className='template'>
            {
                template.devices.phone
                    ? screenParser(
                        template.name,
                        template.devices.phone,
                        template.devices.phone.screens[0]
                    )
                    : template.devices.tablet
                        ? screenParser(
                            template.name,
                            template.devices.tablet,
                            template.devices.tablet.screens[0]
                        )
                        : template.devices.miniPhone
                            ? screenParser(
                                template.name,
                                template.devices.miniPhone,
                                template.devices.miniPhone.screens[0]
                            )
                            : null}
        </div>
    )
}


const screenParser = (name: string, device: Device, screen: MyScreen) => {
    return (
        <Link to={{
            pathname: '/editor',
            state: {
                name: name,
                device: device,
            }
        }}>
            <p>{name}</p>
            <div
                style={{
                    height: device.height,
                    width: device.width,
                    backgroundColor: screen.bc,
                }}
            ></div>
        </Link>
    )
}

function TemplatesPage() {
    const [templates, setTemplates] = useState<Template[][]>([]);

    const templatesReworking = (temps: Template[]): Template[][] => {
        const reworkedTeplates: Template[][] = [];
        let oneTempsRow: Template[] = [];
        for (let i = 0; i < temps.length; i++) {
            oneTempsRow.push(temps[i]);
            if ((i + 1) % 3 === 0 || i + 1 === temps.length) {
                reworkedTeplates.push(oneTempsRow);
                oneTempsRow = [];
            }
        }

        return reworkedTeplates;
    }

    useEffect(() => {
        const reworkedTeplates = templatesReworking(myTemplates);
        setTemplates(reworkedTeplates);
    }, [])

    return <div className='TemplatesPage'>
        <div className='myTemplates'>
            {templates.map((templatesRow: Template[], ind: number) => {
                return (
                    <div key={ind} className='templatesRow'>
                        {TemplateViewer(templatesRow[0])}

                        <div className='templatesSeparator'/>

                        {templatesRow[1]
                            ? TemplateViewer(templatesRow[1])
                            : null
                        }

                        <div className='templatesSeparator'/>

                        {templatesRow[2]
                            ? (TemplateViewer(templatesRow[2]))
                            : (<div>
                                <div className='emptyTemplate'/>
                                <div className='twoSeparators'/>
                            </div>)
                        }
                    </div>
                )
            })}
        </div>
    </div>
}

export default TemplatesPage;
