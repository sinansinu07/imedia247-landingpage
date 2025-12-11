import axios from "axios"
import { localhost } from "../Api/apis"
import { toast } from "react-toastify"

export const startGetAllUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${localhost}/api/users/list`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            console.log(response.data.data)
            dispatch(setUsers(response.data.data))
        } catch(err) {
            console.log(err)
        }
    }
}

const setUsers = (users) => {
    return {
        type: "SET_ALL_USERS",
        payload: users
    }
}

export const startDeleteUser = (userId, handleCloseAll) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${localhost}/api/users/delete/${userId}`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            dispatch(deleteUser(response.data.data))
            toast.success(response.data.message)
            handleCloseAll()
        } catch(err) {
            // alert(err.message)
            console.log(err)
            toast.error(err.response.data.message || err.message || 'Something went wrong')
        }
    }
}

const deleteUser = (user) => {
    return {
        type: "DELETE_USER",
        payload: user
    }
}

export const startToggleBlockUser = (userId, body, handleCloseAll) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${localhost}/api/users/toggleBlock/${userId}`, body, {
                headers:{
                    'Authorization' : localStorage.getItem('token')
                }
            })
            dispatch(toggleBlockUser(response.data.data))
            toast.success(response.data.message)
            handleCloseAll()
            console.log(response.data)
        } catch(err) {
            console.log(err)
            // alert(err.message)
        }
    }
}

const toggleBlockUser = (user) => {
    return {
        type : "TOGGLE_BLOCK_USER",
        payload : user
    }
}