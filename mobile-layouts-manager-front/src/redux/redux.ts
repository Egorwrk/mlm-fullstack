import {combineReducers, configureStore} from '@reduxjs/toolkit';

import templatesSlice from 'redux/templatesSlice';
import workingDeviceSlice from 'redux/workingDeviceSlice';

const rootReducer = combineReducers({
    templatesReducer: templatesSlice,
    workingDeviceReducer: workingDeviceSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
