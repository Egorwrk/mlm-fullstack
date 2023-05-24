import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Template} from "../../types";

const templatesSlice = createSlice({
    name: 'templates',
    initialState: {
        templates: [] as Template[]
    },
    reducers: {
        setTemplates(state, action: PayloadAction<Template[]>) {
            state.templates = action.payload
        },
        addNewTemplate(state, action: PayloadAction<Template>) {
            state.templates.push(action.payload)
        }
    }
})

export default templatesSlice.reducer
export const {setTemplates, addNewTemplate} = templatesSlice.actions