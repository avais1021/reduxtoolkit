import {configureStore} from "@reduxjs/toolkit"

import userReducers from './store'

export const store = configureStore({
    reducer : {
        user : userReducers,
    }
})