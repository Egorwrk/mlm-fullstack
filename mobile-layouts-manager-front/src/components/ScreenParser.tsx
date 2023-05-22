import React from "react";
import {Link} from "react-router-dom";

import {Device, MyScreen} from "../../types";

const ScreenParser = (name: string, device: Device, screen: MyScreen) => {
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

export default ScreenParser