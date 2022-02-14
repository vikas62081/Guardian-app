import { CREATE_NEW_COMMENT, DELETE_COMMENT_BY_ID, GET_ALL_COMMENT, UPDATE_COMMENT } from "./actionType";


export const commentReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_COMMENT:
            return payload;
        case CREATE_NEW_COMMENT:
            return [payload, ...state]
        case UPDATE_COMMENT:
            return state.map(p => {
                if (p.id === payload.id) {
                    return payload
                } else {
                    return p
                }
            })

        case DELETE_COMMENT_BY_ID:
            return state.filter(p => p.id !== payload)

        default:
            return state;
    }
}