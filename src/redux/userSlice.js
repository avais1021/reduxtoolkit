import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {name : ""},
    reducers : {
        ChangeName : (state , action) => {
            state.name = action.payload
        }
    }
})

export const {ChangeName} = userSlice.actions

export default userSlice.reducer