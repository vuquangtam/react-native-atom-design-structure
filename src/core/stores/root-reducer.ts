import { combineReducers } from '@reduxjs/toolkit'

import { AppReducer } from './app';

const rootReducer = combineReducers({
    app: AppReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer