// import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { localhost } from "../Api/apis"
import { toast } from 'react-toastify'

export const startGetBlogCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BLOG_CATEGORIES_REQUEST" });

            const response = await axios.get(
                `${localhost}/api/blogCategories/listAll`
            );

            dispatch(getBlogCategory(response.data.data));
        } catch (err) {
            dispatch({ type: "GET_BLOG_CATEGORIES_FAIL", payload: err.response?.data || [] });
            console.log(err);
        }
    };
};

const getBlogCategory = (category) => {
    return {
        type: "GET_BLOG_CATEGORY",
        payload: category,
    };
};

export const startCreateBlogCategory = (formData, setServerErrors, handleCloseAll)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.post(`${localhost}/api/blogCategories/create`, formData, {
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            dispatch(createBlogCategory(response.data.data))
            toast.success('Succesfully created category')
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
const createBlogCategory = (category)=>{
    return {
        type:"CREATE_BLOG_CATEGORY",
        payload: category
    }
}

export const startUpdateBlogCategory = (formData, categoryId, setServerErrors, handleCloseAll)=>{
    return async(dispatch)=>{
        try{
            const response = await axios.put(`${localhost}/api/blogCategories/update/${categoryId}`, formData, {
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            dispatch(updateBlogCategory(response.data.data));
            toast.success('Category Updated Succesfully')
            handleCloseAll()
            console.log(response.data.data)
        }catch(err){
            setServerErrors(err.response.data.message)
            toast.error(err.response.data.message)
            // alert(err)
            console.log(err.response.data.message);
        }
    }
}
const updateBlogCategory = (category)=>{
    return{
        type:'UPDATE_BLOG_CATEGORY',
        payload:category
    }
}

export const startDeleteBlogCategory = (categoryId, handleCloseAll)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.delete(`${localhost}/api/blogCategories/delete/${categoryId}`,{
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            dispatch(deleteBlogCategory(response.data.data))
            toast.success(response.data.message)
            handleCloseAll()
            console.log(response.data.data)
        }catch(err){
            console.log(err);
            // alert(err)
        }
    }
}
const deleteBlogCategory = (category)=>{
    return{
        type:"DELETE_BLOG_CATEGORY",
        payload:category
    }
}