import { BASE_URL, deleteAxios, getAxios, postAxios, putAxios } from "."
import { CREATE_NEW_POST, DELETE_POST_BY_ID, GET_ALL_POST, UPDATE_POST } from "../store/reducers/actionType"
import { errorNotification, notification, startLoading, stopLoading } from "../utility"

export const getAllPosts = (dispatch) => {
    getAxios(`${BASE_URL}/posts`)
        .then(resp => dispatch({ type: GET_ALL_POST, payload: resp.data }))
        .catch(err => errorNotification(err))
}

export const createPost = (dispatch, data) => {
    startLoading()
    postAxios(`${BASE_URL}/posts`, { ...data, user_id: 2904 })
        .then(resp => {
            stopLoading()
            dispatch({ type: CREATE_NEW_POST, payload: resp.data })
            notification("New post created successfully")
        })
        .catch(err => errorNotification(err))
}

export const updatePostById = (dispatch, data) => {
    startLoading()
    putAxios(`${BASE_URL}/posts`, data)
        .then(resp => {
            stopLoading()
            dispatch({ type: UPDATE_POST, payload: resp.data })
            notification('Post updated successfully')
        })
        .catch(err => errorNotification(err))
}
export const deletePostById = (dispatch, id) => {
    startLoading()
    deleteAxios(`${BASE_URL}/posts`, id)
        .then(resp => {
            stopLoading()
            dispatch({ type: DELETE_POST_BY_ID, payload: id })
            notification("Post deleted successfully")
        })
        .catch(err => errorNotification(err))
}