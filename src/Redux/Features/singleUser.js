import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const singleUserSlice = createSlice({
    name:"singleUser",
    initialState:{
        user:null
    },
    reducers:{
        setUser:(state, action)=>{
            state.user = action.payload
        }
    }
})


export const  {setUser} =singleUserSlice.actions

export default singleUserSlice.reducer