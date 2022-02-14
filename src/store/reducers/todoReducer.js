import { CREATE_NEW_TODO, DELETE_TODO_BY_ID, GET_ALL_TODO, UPDATE_TODO } from "./actionType";



export const todoReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_TODO:
            return payload;
        case CREATE_NEW_TODO:
            return [payload, ...state]
        case UPDATE_TODO:
            return state.map(p => {
                if (p.id === payload.id) {
                    return payload
                } else {
                    return p
                }
            })

        case DELETE_TODO_BY_ID:
            return state.filter(p => p.id !== payload)

        default:
            return state;
    }
}