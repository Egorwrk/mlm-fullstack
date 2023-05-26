import React from 'react';

import screenParser from 'components/ScreenParser';
import {Template} from '../../types';

const TemplateViewer = (template: Template, index: number) => {
    return (
        <div key={template.name} className='template'>
            {screenParser(template, index)}
        </div>
    )
}

export default TemplateViewer