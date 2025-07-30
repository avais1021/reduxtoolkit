import {configureStore} from "@reduxjs/toolkit"

import userReducers from './userSlice'

import studentsReducers from "./studentsSlice"

export const store = configureStore({
    reducer : {
        user : userReducers,
        student : studentsReducers,
    }
})