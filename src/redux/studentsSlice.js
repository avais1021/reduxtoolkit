import {createSlice} from "@reduxjs/toolkit"

const studentsSlice = createSlice({
    name : "student",
    initialState : {name : ""},
    reducers : {
        AddStudent : (state , action) => {
            state.name = action.payload;
        }
    }
})

export const {AddStudent} = studentsSlice.actions;

export default studentsSlice.reducer;