import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getUsers = createAsyncThunk('/getUsers', async(page)=>{
    console.log(page);
    try{
        const response = await api.getUsers(page)
        return response.data
    }catch(err){

    }
})


const usersSlice = createSlice({
    name:"usersList",
    initialState:{
        users:null,
        loading:false,
        error:null
    },
    extraReducers:{
        [getUsers.pending]:(state, action)=>{
            state.loading = true
        },
        [getUsers.fulfilled]:(state, action)=>{
            // console.log(action.payload.results);
            state.users =action.payload.results
            state.loading = false
        },
        [getUsers.rejected]:(state, action)=>{
            state.error = action.payload.message
        },
    }
})

export default usersSlice.reducer