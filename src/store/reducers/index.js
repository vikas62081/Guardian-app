import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";
import { postReducer } from "./postReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers(
    {
        posts: postReducer,
        comments: commentReducer,
        todos: todoReducer
    }
)