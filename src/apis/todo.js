import { BASE_URL, deleteAxios, getAxios, postAxios, putAxios } from "."
import { CREATE_NEW_TODO, DELETE_TODO_BY_ID, GET_ALL_TODO, UPDATE_TODO } from "../store/reducers/actionType"
import { errorNotification, notification, startLoading, stopLoading } from "../utility"

export const getAllTodos = (dispatch) => {
    getAxios(`${BASE_URL}/todos`)
        .then(resp => dispatch({ type: GET_ALL_TODO, payload: resp.data }))
        .catch(err => errorNotification(err))
}

export const createTodo = (dispatch, data) => {
    startLoading()
    postAxios(`${BASE_URL}/todos`, { ...data, user_id: 2904 })
        .then(resp => {
            stopLoading()
            dispatch({ type: CREATE_NEW_TODO, payload: resp.data })
            notification("New todo created successfully")
        })
        .catch(err => errorNotification(err))
}

export const updateTodoById = (dispatch, data) => {
    startLoading()
    putAxios(`${BASE_URL}/todos`, data)
        .then(resp => {
            stopLoading()
            dispatch({ type: UPDATE_TODO, payload: resp.data })
            notification('Todo updated successfully')
        })
        .catch(err => errorNotification(err))
}
export const deleteTodoById = (dispatch, id) => {
    startLoading()
    deleteAxios(`${BASE_URL}/todos`, id)
        .then(resp => {
            stopLoading()
            dispatch({ type: DELETE_TODO_BY_ID, payload: id })
            notification("Todo deleted successfully")
        })
        .catch(err => errorNotification(err))
}