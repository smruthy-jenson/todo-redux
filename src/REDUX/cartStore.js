import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './Reducer/todoReducer'
const cartStore = configureStore({
    reducer:{
     todos: todoReducer,
    },
});
export default cartStore