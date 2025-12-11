import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"

import usersReducer from "../Reducers/usersReducer"
import blogCategoryReducers from "../Reducers/blogCategoryReducers"
import blogReducers from "../Reducers/blogReducers"

const configureStore = () => {
    const store = createStore(combineReducers({
        // reducers
        users: usersReducer,
        blogCategories: blogCategoryReducers,
        blogs: blogReducers,
    }), applyMiddleware(thunk))

    return store
}

export default configureStore