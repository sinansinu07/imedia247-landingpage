const initialState = {
    data: [],
    serverErrors: [],
    loading: false
}

export default function blogReducers(state = initialState, action){
    switch (action.type) {
        case 'GET_BLOG_REQUEST': {
            return { ...state, loading: true };
        }
        case 'GET_BLOGS': {
            return { ...state, data: action.payload, loading: false };
        }
        case 'GET_BLOG_FAIL': {
            return { ...state, loading: false, serverErrors: action.payload || [] };
        }
        case 'CREATE_BLOG': {
            return {...state,data: [...state.data, action.payload]};
        }
        case "DELETE_BLOG" : {
            return { ...state, data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        case "UPDATE_BLOG": {
            return { ...state, data: state.data.map((ele) => {
                if(ele._id === action.payload._id) {
                    return action.payload 
                } else {
                    return ele 
                }
            })}
        }
        default: {
            return state
        }
    }
}