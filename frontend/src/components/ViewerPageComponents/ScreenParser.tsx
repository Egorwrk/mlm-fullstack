import React from 'react';
import {Link} from 'react-router-dom';

import {Template} from 'types';

const ScreenParser = (template: Template, index: number) => {
    return (
        <Link to={{pathname: '/main/editor'}} state={{index: index}}>
            {template.name}
            <div
                style={{
                    height: template.height,
                    width: template.width,
                    backgroundColor: template.screens[0].bc,
                }}
            />
        </Link>
    )
}

export default ScreenParser