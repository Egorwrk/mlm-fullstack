import React from 'react';

import {MyScreen} from 'types';

interface Props {
    screenContent: MyScreen
}

const EmptyBlocks = (props: Props) => {
    return (
        <>
            {props.screenContent.emptyBlocks[0]
                ? props.screenContent.emptyBlocks.map((block, index) => {
                    return <div key={index}
                                style={{
                                    height: block.height,
                                    width: block.width,
                                    position: 'relative',
                                    left: block.left,
                                    top: block.top,
                                    border: '1px solid black',
                                }}
                    />
                })
                : null
            }
        </>
    );
};

export default EmptyBlocks;