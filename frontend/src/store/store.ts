import {combineReducers, configureStore} from '@reduxjs/toolkit';

import templatesSlice from 'store/templatesSlice';

const rootReducer = combineReducers({
    templatesReducer: templatesSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
