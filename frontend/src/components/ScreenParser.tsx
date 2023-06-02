import React from 'react';
import {Link} from 'react-router-dom';

import {Template} from '../../types';

const ScreenParser = (template: Template, index: number) => {
    return (
        <Link to={{
            pathname: '/editor',
            state: {
                index: index
            },
        }}>
            <p>{template.name}</p>
            <div
                style={{
                    height: template.height,
                    width: template.width,
                    backgroundColor: template.screens[0].bc,
                }}
            ></div>
        </Link>
    )
}

export default ScreenParser