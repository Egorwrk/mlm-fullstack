import React, {useEffect, useState} from 'react';
import '../../assets/TemplatesPage.css';
import {Template, MyScreen, Device} from '../../../types';
import {myTemplates} from '../../assets/tempConstants';
import {Link} from 'react-router-dom';

const TemplateViewer = (templ: Template) => {
    return (
        <div key={templ.name} className='template'>
            {templ.devices.phone
                ? screenParser(
                    templ.name,
                    templ.devices.phone,
                    templ.devices.phone.screens[0]
                )
                : templ.devices.tablet
                    ? screenParser(
                        templ.name,
                        templ.devices.tablet,
                        templ.devices.tablet.screens[0]
                    )
                    : templ.devices.miniPhone
                        ? screenParser(
                            templ.name,
                            templ.devices.miniPhone,
                            templ.devices.miniPhone.screens[0]
                        )
                        : null}
        </div>
    );
};


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
    );
};

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
    };

    useEffect(() => {
        const reworkedTeplates = templatesReworking(myTemplates);
        setTemplates(reworkedTeplates);
    }, []);

    return <div className='TemplatesPage'>
        <div className='myTemplates'>
            {templates.map((templRow: Template[], ind: number) => {
                return (
                    <div key={ind} className='templsRow'>
                        {TemplateViewer(templRow[0])}

                        <div className='templsSepar'/>

                        {templRow[1]
                            ? TemplateViewer(templRow[1])
                            : null
                        }

                        <div className='templsSepar'/>

                        {templRow[2]
                            ? (TemplateViewer(templRow[2]))
                            : (<div>
                                <div className='emptyTemp'/>
                                <div className='twoSepar'/>
                            </div>)
                        }
                    </div>
                );
            })}
        </div>
    </div>;
}

export default TemplatesPage;
