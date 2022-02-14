import { CREATE_NEW_POST, DELETE_POST_BY_ID, GET_ALL_POST, UPDATE_POST } from "./actionType";


export const postReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_POST:
            return payload;
        case CREATE_NEW_POST:
            return [payload, ...state]
        case UPDATE_POST:
            return state.map(p => {
                if (p.id === payload.id) {
                    return payload
                } else {
                    return p
                }
            })

        case DELETE_POST_BY_ID:
            return state.filter(p => p.id !== payload)

        default:
            return state;
    }
}