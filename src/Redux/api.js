import axios from "axios"

const API = axios.create({
    baseURL: "https://randomuser.me",
})

export const getUsers = (page) => API.get(`/api/?page=${page}&results=5`)

