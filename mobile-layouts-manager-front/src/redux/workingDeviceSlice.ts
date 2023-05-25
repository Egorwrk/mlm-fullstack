import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {emptyDevices} from 'assets/emptyMockups';
import {Device, MyScreen} from '../../types';

const workingDeviceSlice = createSlice({
    name: 'workingDevice',
    initialState: {
        workingDevice: emptyDevices.phone
    },
    reducers: {
        addScreen(state, action: PayloadAction<MyScreen>) {
            state.workingDevice.screens.push(action.payload)
        },
        setDevice(state, action: PayloadAction<Device>) {
            state.workingDevice = action.payload
        }
    }
})

export default workingDeviceSlice.reducer
export const {addScreen, setDevice} = workingDeviceSlice.actions