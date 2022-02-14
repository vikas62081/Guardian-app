import { notificationEmitter } from "../components/notification"
import { processingEmitter } from "../components/progress"
import { ERROR_NOTIFICATION, NOTIFICATION, START_PROCESSING, STOP_PROCESSING } from "./contant"

export const startLoading = () => {
    processingEmitter.emit(START_PROCESSING)
}

export const stopLoading = () => {
    processingEmitter.emit(STOP_PROCESSING)
}

export const notification = (message) => {
    notificationEmitter.emit(NOTIFICATION, message)
}

export const errorNotification = (message) => {
    notificationEmitter.emit(ERROR_NOTIFICATION, message)
    stopLoading()
}