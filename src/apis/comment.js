import { BASE_URL, deleteAxios, getAxios, postAxios, putAxios } from "."
import { CREATE_NEW_COMMENT, DELETE_COMMENT_BY_ID, GET_ALL_COMMENT, UPDATE_COMMENT, } from "../store/reducers/actionType"
import { errorNotification, notification, stopLoading } from "../utility"
import { startLoading } from "../utility"

export const getAllComments = (dispatch) => {
    startLoading()
    getAxios(`${BASE_URL}/comments`)
        .then(resp => {
            stopLoading()
            dispatch({ type: GET_ALL_COMMENT, payload: resp.data })
        })
        .catch(err => errorNotification(err))
}

export const createComment = (dispatch, data) => {
    startLoading()
    postAxios(`${BASE_URL}/comments`, { ...data, user_id: 2904 })
        .then(resp => {
            stopLoading()
            dispatch({ type: CREATE_NEW_COMMENT, payload: resp.data })
            notification("New Comment created successfully")

        })
        .catch(err => errorNotification(err))
}

export const updateCommentById = (dispatch, data) => {
    startLoading()
    putAxios(`${BASE_URL}/comments`, data)
        .then(resp => {
            stopLoading()
            dispatch({ type: UPDATE_COMMENT, payload: resp.data })
            notification('Comment updated successfully')
        })
        .catch(err => errorNotification(err))
}
export const deleteCommentById = (dispatch, id) => {
    startLoading()
    deleteAxios(`${BASE_URL}/comments`, id)
        .then(resp => {
            stopLoading()
            dispatch({ type: DELETE_COMMENT_BY_ID, payload: id })
            notification("Comment deleted successfully")
        })
        .catch(err => errorNotification(err))
}