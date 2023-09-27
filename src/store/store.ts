import {combineReducers, configureStore} from '@reduxjs/toolkit'
import weatherReducer, {changeDataOfWeekDay} from './reducer.ts'
// console.log(changeDataOfWeekDay)

const rootReducer = combineReducers({
    weatherReducer,
    changeDataOfWeekDay
})

export const store = configureStore({
    reducer: rootReducer 
})

export type RootState = ReturnType<typeof rootReducer>;
