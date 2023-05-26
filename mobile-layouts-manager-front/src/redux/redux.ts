import {combineReducers, configureStore} from '@reduxjs/toolkit';

import templatesSlice from 'redux/templatesSlice';

const rootReducer = combineReducers({
    templatesReducer: templatesSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
