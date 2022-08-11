import { configureStore } from "@reduxjs/toolkit";
import UserReduces from "./Features/fetchUsers"
import SingleUser from "./Features/singleUser"

const store = configureStore({
    reducer: {
        users: UserReduces,
        single: SingleUser
    }
})

export default store;