// import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { localhost } from "../Api/apis"
import { toast } from 'react-toastify'

export const startGetBlogs = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BLOG_REQUEST" });

            const response = await axios.get(
                `${localhost}/api/blogs/listAll`
            );

            dispatch(getBlogs(response.data.data));
        } catch (err) {
            dispatch({ type: "GET_BLOG_FAIL", payload: err.response?.data || [] });
            console.log(err);
        }
    };
};

const getBlogs = (blog) => {
    return {
        type: "GET_BLOGS",
        payload: blog,
    };
};

export const startCreateBlog = (formData, setServerErrors, handleCloseAll)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.post(`${localhost}/api/blogs/create`, formData, {
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            dispatch(createBlog(response.data.data))
            toast.success('Succesfully created blog')
            handleCloseAll()
            console.log(response.data.data)
        } catch (err) {
            toast.error("Failed to Add Product");

            const { message } = err.response.data;
            console.log(message);
            if (Array.isArray(message)) {
                // Field-level validation errors
                setServerErrors(message); // always an array
            } else {
                // General error -> wrap in array for consistency
                setServerErrors([{ msg: message }]);
            }
        }
    }
}
const createBlog = (blog)=>{
    return {
        type:"CREATE_BLOG",
        payload: blog
    }
}

export const startUpdateBlog = (formData, blogId, setServerErrors, handleCloseAll)=>{
    console.log("Form Data", formData);
    return async(dispatch)=>{
        try{
            const response = await axios.put(`${localhost}/api/blogs/update/${blogId}`, formData, {
                headers:{
                    "Authorization": localStorage.getItem("token")
                }
            })
            dispatch(updateBlog(response.data.data));
            toast.success('blog Updated Succesfully')
            handleCloseAll()
            console.log(response.data.data)
        }catch(err){
            setServerErrors(err.response.data.message)
            toast.error(err.response.data.message)
            // alert(err)
            console.log(err);
        }
    }
}
const updateBlog = (blog)=>{
    return{
        type:'UPDATE_BLOG',
        payload:blog
    }
}

export const startDeleteBlog = (blogId, handleCloseAll)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.delete(`${localhost}/api/blogs/delete/${blogId}`,{
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            dispatch(deleteBlog(response.data.data))
            toast.success(response.data.message)
            handleCloseAll()
            console.log(response.data.data)
        }catch(err){
            console.log(err);
            // alert(err)
        }
    }
}
const deleteBlog = (blog)=>{
    return{
        type:"DELETE_BLOG",
        payload:blog
    }
}