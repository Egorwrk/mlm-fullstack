import {combineReducers, configureStore} from "@reduxjs/toolkit";
import templatesSlice from "./templatesSlice";

const rootReducer = combineReducers({
    templates: templatesSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
