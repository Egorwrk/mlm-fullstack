import React from "react";

import screenParser from "./ScreenParser";
import {Template} from "../../types";

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

export default TemplateViewer